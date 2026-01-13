/**
 * Types for chat messages and file attachments
 */

export type MessageRole = 'user' | 'assistant' | 'system';

export interface FileAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
  uploadedAt: Date;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  attachments?: FileAttachment[];
  artifactId?: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface FileValidation {
  maxSize: number; // in bytes
  allowedTypes: string[];
  maxFiles: number;
}

export const DEFAULT_FILE_VALIDATION: FileValidation = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [
    'application/pdf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv',
    'image/png',
    'image/jpeg',
    'image/jpg',
  ],
  maxFiles: 5,
};
