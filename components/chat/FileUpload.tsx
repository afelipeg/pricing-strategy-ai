'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, AlertCircle } from 'lucide-react';
import { DEFAULT_FILE_VALIDATION } from '@/lib/types/message';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
}

export function FileUpload({
  onFilesSelected,
  maxFiles = DEFAULT_FILE_VALIDATION.maxFiles,
}: FileUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesSelected(acceptedFiles);
    },
    [onFilesSelected]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        'application/pdf': ['.pdf'],
        'application/vnd.ms-excel': ['.xls'],
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
          '.xlsx',
        ],
        'text/csv': ['.csv'],
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg'],
      },
      maxSize: DEFAULT_FILE_VALIDATION.maxSize,
      maxFiles,
    });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25 hover:border-primary/50'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
        <p className="mt-2 text-sm font-medium">
          {isDragActive
            ? 'Drop files here...'
            : 'Drag & drop files or click to browse'}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          PDF, Excel, CSV, or images (max 10MB)
        </p>
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-2 rounded-md bg-destructive/10 p-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-destructive">
                Some files were rejected:
              </p>
              <ul className="mt-1 text-xs text-destructive/90">
                {fileRejections.map(({ file, errors }) => (
                  <li key={file.name}>
                    {file.name}: {errors[0].message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
