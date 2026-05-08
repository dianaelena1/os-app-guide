import { Injectable, inject } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);

  user$: Observable<User | null> = authState(this.auth);

  displayName$: Observable<string> = this.user$.pipe(
    map(user => this.getDisplayName(user?.email ?? null))
  );

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  getDisplayName(email: string | null): string {
    if (!email) {
      return 'Student';
    }

    const namePart = email.split('@')[0];

    if (namePart === 'admin') {
      return 'Admin';
    }

    const pieces = namePart.split('-');
    const lastPiece = pieces[pieces.length - 1];

    return this.capitalize(lastPiece);
  }

  private capitalize(value: string): string {
    if (!value) {
      return 'Student';
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}