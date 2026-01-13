'use client';

import { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FilePreview } from './FilePreview';
import { FileUpload } from './FileUpload';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { FileAttachment } from '@/lib/types/message';
import { generateId } from '@/lib/utils';

interface InputAreaProps {
  onSendMessage: (content: string, files?: FileAttachment[]) => void;
  disabled?: boolean;
}

export function InputArea({ onSendMessage, disabled = false }: InputAreaProps) {
  const [input, setInput] = useState('');
  const [files, setFiles] = useState<FileAttachment[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFilesSelected = (selectedFiles: File[]) => {
    const newFiles: FileAttachment[] = selectedFiles.map((file) => ({
      id: generateId(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date(),
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    setIsDialogOpen(false);
  };

  const handleRemoveFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const handleSend = () => {
    if (!input.trim() && files.length === 0) return;
    onSendMessage(input.trim(), files.length > 0 ? files : undefined);
    setInput('');
    setFiles([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-background p-4">
      {files.length > 0 && (
        <div className="mb-3 space-y-2">
          {files.map((file) => (
            <FilePreview
              key={file.id}
              file={file}
              onRemove={handleRemoveFile}
            />
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" disabled={disabled}>
              <Paperclip className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Files</DialogTitle>
            </DialogHeader>
            <FileUpload onFilesSelected={handleFilesSelected} />
          </DialogContent>
        </Dialog>

        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about pricing strategy, upload data, or request analysis..."
          className="min-h-[60px] max-h-[200px] resize-none"
          disabled={disabled}
        />

        <Button
          onClick={handleSend}
          size="icon"
          disabled={disabled || (!input.trim() && files.length === 0)}
          className="shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
}
