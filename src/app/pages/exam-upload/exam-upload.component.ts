import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Auth } from '@angular/fire/auth';
import { Firestore, doc, serverTimestamp, setDoc } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

interface UploadedExamFile {
  slot: number;
  originalName: string;
  storagePath: string;
  downloadUrl: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-exam-upload',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exam-upload.component.html',
  styleUrl: './exam-upload.component.scss'
})
export class ExamUploadComponent {
  private authService = inject(AuthService);  
  private auth = inject(Auth);
  private storage = inject(Storage);
  private firestore = inject(Firestore);

  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private recordingStream: MediaStream | null = null;

  isRecording = false;
  recordingUrl: string | null = null;

  displayName$ = this.authService.displayName$;

  file1: File | null = null;
  file2: File | null = null;

  isUploading = false;
  successMessage = '';
  errorMessage = '';

  readonly maxFileSizeMb = 5;

 onFileSelected(event: Event, slot: 1 | 2): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0] ?? null;

  if (!file) {
    return;
  }

  if (file.size > this.maxFileSizeMb * 1024 * 1024) {
    this.errorMessage = `Fișierul este prea mare. Maxim ${this.maxFileSizeMb} MB.`;
    input.value = '';
    return;
  }

  if (slot === 1) {
    this.file1 = file;
  }

  if (slot === 2) {
    this.file2 = file;
  }

  this.errorMessage = '';
  this.successMessage = '';
}

  async submitFiles(): Promise<void> {
    this.errorMessage = '';
    this.successMessage = '';

    const user = this.auth.currentUser;

    if (!user) {
      this.errorMessage = 'Trebuie să fii logat pentru a trimite fișierele.';
      return;
    }

    if (!this.file1 || !this.file2) {
        this.errorMessage = 'Te rog încarcă exact 2 fișiere.';
        return;
    }

    if (this.file1.name === this.file2.name) {
        this.errorMessage = 'Cele două fișiere trebuie să aibă nume diferite.';
        return;
    }

    this.isUploading = true;

    try {
      const uploadedFiles: UploadedExamFile[] = [];

      const files = [
        { slot: 1, file: this.file1 },
        { slot: 2, file: this.file2 }
      ];

      for (const item of files) {
        const safeFileName = this.makeSafeFileName(item.file.name);
        const ownerFolder = user.email ?? user.uid;

        const storagePath = `exam-submissions/${ownerFolder}/${safeFileName}`;

        const fileRef = ref(this.storage, storagePath);

        await uploadBytes(fileRef, item.file, {
          customMetadata: {
            uid: user.uid,
            email: user.email ?? ''
          }
        });

        const downloadUrl = await getDownloadURL(fileRef);

        uploadedFiles.push({
          slot: item.slot,
          originalName: item.file.name,
          storagePath,
          downloadUrl,
          size: item.file.size,
          type: item.file.type || 'unknown'
        });
      }

      await setDoc(
        doc(this.firestore, 'examSubmissions', user.uid),
        {
          uid: user.uid,
          email: user.email ?? '',
          files: uploadedFiles,
          status: 'submitted',
          submittedAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );

      this.successMessage = 'Fișierele au fost încărcate cu succes.';
      this.file1 = null;
      this.file2 = null;
    } catch (error) {
      console.error(error);
      this.errorMessage = 'A apărut o eroare la upload. Verifică Firebase Storage / Rules.';
    } finally {
      this.isUploading = false;
    }
  }

  private makeSafeFileName(fileName: string): string {
    return fileName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9._-]/g, '');
  }

    async startScreenRecording(): Promise<void> {
        this.errorMessage = '';
        this.successMessage = '';

        if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
            this.errorMessage = 'Browserul nu suportă screen recording.';
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    frameRate: 10,
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });

            this.recordingStream = stream;
            this.recordedChunks = [];

            if (this.recordingUrl) {
                URL.revokeObjectURL(this.recordingUrl);
                this.recordingUrl = null;
            }

            this.mediaRecorder = new MediaRecorder(stream, {
                mimeType: this.getSupportedMimeType(),
                videoBitsPerSecond: 350_000
            });

            this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
                if (event.data && event.data.size > 0) {
                    this.recordedChunks.push(event.data);
                }
            };

            this.mediaRecorder.onstop = () => {
                const blob = new Blob(this.recordedChunks, {
                    type: this.mediaRecorder?.mimeType || 'video/webm'
                });

                this.recordingUrl = URL.createObjectURL(blob);

                this.recordingStream?.getTracks().forEach(track => track.stop());
                this.recordingStream = null;
                this.isRecording = false;
            };

            stream.getVideoTracks()[0].onended = () => {
                this.stopScreenRecording();
            };

            this.mediaRecorder.start();
            this.isRecording = true;
        } catch (error) {
            console.error(error);
            this.errorMessage = 'Înregistrarea a fost anulată sau nu a putut porni.';
            this.isRecording = false;
        }
    }

    stopScreenRecording(): void {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
        }

        this.recordingStream?.getTracks().forEach(track => track.stop());
        this.isRecording = false;
    }

    private getSupportedMimeType(): string {
        const types = [
            'video/webm;codecs=vp9',
            'video/webm;codecs=vp8',
            'video/webm'
        ];

        return types.find(type => MediaRecorder.isTypeSupported(type)) || 'video/webm';
    }
}