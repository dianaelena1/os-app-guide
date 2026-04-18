import { BadgeItem, GuideTab, QuizQuestion } from "../models/guide.models";

export const GUIDE_TABS: GuideTab[] = [
  { id: "overview", label: "Overview" },
  { id: "basics", label: "Bash basics" },
  { id: "ls", label: "ls" },
  { id: "chmod", label: "chmod" },
  { id: "grep", label: "grep" },
  { id: "sed", label: "sed" },
  { id: "awk", label: "awk" },
  { id: "quiz", label: "Quiz" },
];

export const GUIDE_BADGES: BadgeItem[] = [
  { label: "Ce caut?" },
  { label: "Ce modific?" },
  { label: "Ce coloană folosesc?" },
  { label: "Ce permisiune schimb?" },
  { label: "Ce intrare are?" },
  { label: "Ce ieșire produce?" },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lab1-q1',
    lab: 'Lab 1',
    question: 'Which component is responsible for executing instructions?',
    options: ['RAM', 'Hard Disk', 'CPU (Processor)', 'GPU'],
    correctAnswer: 'CPU (Processor)',
    explanation: 'CPU executes instructions and processes operations.'
  },
  {
    id: 'lab1-q2',
    lab: 'Lab 1',
    question: 'What type of storage does FAT belong to?',
    options: [
      'Primary memory',
      'Cache memory',
      'Secondary storage',
      'Virtual memory'
    ],
    correctAnswer: 'Secondary storage',
    explanation: 'FAT is a file system used on secondary storage devices.'
  },
  {
    id: 'lab1-q3',
    lab: 'Lab 1',
    question: 'What is magnetic storage?',
    options: [
      'Storage using electrical charges',
      'Storage using magnetic fields on rotating disks',
      'Temporary memory used by the CPU',
      'Optical storage like CDs'
    ],
    correctAnswer: 'Storage using magnetic fields on rotating disks',
    explanation: 'Magnetic storage stores data using magnetic fields, typically on disks.'
  },

  {
    id: 'lab2-q1',
    lab: 'Lab 2',
    question: 'What is file descriptor 0?',
    options: ['stderr', 'stdout', 'stdin', 'pipe'],
    correctAnswer: 'stdin',
    explanation: 'File descriptor 0 represents standard input.'
  },
  {
    id: 'lab2-q2',
    lab: 'Lab 2',
    question: 'What does PS1 represent?',
    options: [
      'Opens a file',
      'Deletes a file',
      'Shows file type',
      'Primary shell prompt'
    ],
    correctAnswer: 'Primary shell prompt',
    explanation: 'PS1 defines the primary shell prompt.'
  },
  {
    id: 'lab2-q3',
    lab: 'Lab 2',
    question: 'What does uniq do?',
    options: [
      'Sorts lines',
      'Removes duplicate adjacent lines',
      'Counts words',
      'Finds files'
    ],
    correctAnswer: 'Removes duplicate adjacent lines',
    explanation: 'uniq removes adjacent duplicate lines.'
  },
  {
    id: 'lab2-q4',
    lab: 'Lab 2',
    question: 'What does the file command display?',
    options: [
      'First process',
      'Default shell',
      'File type',
      'System path'
    ],
    correctAnswer: 'File type',
    explanation: 'The file command identifies the type of a file.'
  },
  {
    id: 'lab2-q5',
    lab: 'Lab 2',
    question: 'What does the finger command display?',
    options: [
      'File size',
      'User information',
      'Network configuration',
      'Disk usage'
    ],
    correctAnswer: 'User information',
    explanation: 'finger displays information about users.'
  },
  {
    id: 'lab2-q6',
    lab: 'Lab 2',
    question: 'What is GID and UID?',
    options: [
      'Global Internet Directory',
      'Group ID and User ID',
      'Graphical Interface Driver',
      'General Input Device'
    ],
    correctAnswer: 'Group ID and User ID',
    explanation: 'UID identifies a user and GID identifies a group.'
  },
  {
    id: 'lab2-q7',
    lab: 'Lab 2',
    question: 'What does last show?',
    options: [
      'Last modified file',
      'Last system login sessions',
      'Last created directory',
      'Last command executed'
    ],
    correctAnswer: 'Last system login sessions',
    explanation: 'last shows login history.'
  },

  {
    id: 'lab3-q1',
    lab: 'Lab 3',
    question: 'Which character is used to represent the root directory?',
    options: ['.', '\\', '/', '..', '~'],
    correctAnswer: '/',
    explanation: '/ is the root directory in Unix/Linux.'
  },
  {
    id: 'lab3-q2',
    lab: 'Lab 3',
    question: 'Which of these is a valid absolute pathname for numbers.txt?',
    options: [
      '/home/xdianaelena/documents/numbers.txt',
      'home/xdianaelena/documents/numbers.txt',
      './documents/numbers.txt'
    ],
    correctAnswer: '/home/xdianaelena/documents/numbers.txt',
    explanation: 'An absolute path starts from the root directory.'
  },
  {
    id: 'lab3-q3',
    lab: 'Lab 3',
    question: 'Under which directory can you find Google Earth program files (not installed by default)?',
    options: ['tmp', 'home', 'opt'],
    correctAnswer: 'opt',
    explanation: 'Optional third-party software is often installed under /opt.'
  },
  {
    id: 'lab3-q4',
    lab: 'Lab 3',
    question: 'Assume that dir1 is an empty directory. Which command will remove it?',
    options: ['rm dir1', 'remove dir1', 'rmdir dir1', 'del dir1'],
    correctAnswer: 'rmdir dir1',
    explanation: 'rmdir removes empty directories.'
  },
  {
    id: 'lab3-q5',
    lab: 'Lab 3',
    question: 'Assume that dir1 is a non-empty directory. Which command will remove it?',
    options: ['rmdir dir1', 'rm -R dir1', 'rm -f dir1'],
    correctAnswer: 'rm -R dir1',
    explanation: 'A non-empty directory requires recursive removal.'
  },
  {
    id: 'lab3-q6',
    lab: 'Lab 3',
    question: 'Assume that dir1 is non-empty and text1 is a file. Which command removes both?',
    options: [
      'rm text1 dir1',
      'rm -v text1 dir1',
      'rm -R text1 dir1'
    ],
    correctAnswer: 'rm -R text1 dir1',
    explanation: 'Recursive removal is needed for the non-empty directory.'
  },

  {
    id: 'lab5-q1',
    lab: 'Lab 5',
    question: 'What does continue do in a loop?',
    options: [
      'Stops the script',
      'Exits the loop completely',
      'Skips current iteration and continues',
      'Restarts the script'
    ],
    correctAnswer: 'Skips current iteration and continues',
    explanation: 'continue skips the current iteration and moves to the next one.'
  },
  {
    id: 'lab5-q2',
    lab: 'Lab 5',
    question: 'What does exec do in bash?',
    options: [
      'Creates a child process',
      'Replaces current shell process',
      'Duplicates file descriptor',
      'Waits for process'
    ],
    correctAnswer: 'Replaces current shell process',
    explanation: 'exec replaces the current shell with another process.'
  },

  {
    id: 'lab6-q1',
    lab: 'Lab 6',
    question: "What does the command sed 's/a/@/g' file.txt do?",
    options: [
      'Deletes lines with a',
      'Replaces first "a" only',
      'Replaces all "a" with "@"',
      'Sorts lines'
    ],
    correctAnswer: 'Replaces all "a" with "@"',
    explanation: 'The g flag means global replacement on each line.'
  },
  {
    id: 'lab6-q2',
    lab: 'Lab 6',
    question: 'What does p mean in sed?',
    options: ['Pause', 'Print', 'Pipe', 'Pattern'],
    correctAnswer: 'Print',
    explanation: 'p in sed is used for print.'
  },
  {
    id: 'lab6-q3',
    lab: 'Lab 6',
    question: 'In awk, what does NR represent?',
    options: [
      'Number of records (line number)',
      'Number of rows',
      'Name record',
      'Numeric result'
    ],
    correctAnswer: 'Number of records (line number)',
    explanation: 'NR is the current record number, usually the current line number.'
  },
  {
    id: 'lab6-q4',
    lab: 'Lab 6',
    question: 'In awk, what does NF represent?',
    options: [
      'New file',
      'Number of fields in current line',
      'Name field',
      'Number format'
    ],
    correctAnswer: 'Number of fields in current line',
    explanation: 'NF stores the number of fields in the current record.'
  },
  {
    id: 'lab6-q5',
    lab: 'Lab 6',
    question: 'When does END block execute in awk?',
    options: [
      'Before reading file',
      'After each line',
      'After entire input is processed',
      'Only on errors'
    ],
    correctAnswer: 'After entire input is processed',
    explanation: 'END runs after all input has been processed.'
  }
];

export interface LabImage {
  lab: string;
  images: string[];
}

export const LAB_IMAGES: LabImage[] = [
  {
    lab: 'Lab 1',
    images: [
      'assets/images/labs/lab1/slide1.png',
      'assets/images/labs/lab1/slide2.png'
    ]
  },
  {
    lab: 'Lab 2',
    images: [
      'assets/images/labs/lab2/slide1.png',
      'assets/images/labs/lab2/slide2.png'
    ]
  }
];