export enum Tone {
  PROFESSIONAL = 'Professional',
  URGENT = 'Urgent',
  FRIENDLY = 'Friendly',
  TECHNICAL = 'Technical',
  HUMOROUS = 'Humorous'
}

export enum Language {
  UKRAINIAN = 'Ukrainian',
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  FRENCH = 'French',
  GERMAN = 'German'
}

export interface GeneratedAlert {
  title: string;
  message: string;
  actionText: string;
  markdown: string;
  json: string;
}

export interface AlertRequest {
  defaultUrl: string;
  tone: Tone;
  language: Language;
}