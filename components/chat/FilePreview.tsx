import { X, FileText, FileSpreadsheet, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatFileSize } from '@/lib/utils';
import type { FileAttachment } from '@/lib/types/message';

interface FilePreviewProps {
  file: FileAttachment;
  onRemove: (fileId: string) => void;
}

export function FilePreview({ file, onRemove }: FilePreviewProps) {
  const getFileIcon = () => {
    if (file.type.includes('pdf')) return FileText;
    if (file.type.includes('spreadsheet') || file.type.includes('csv'))
      return FileSpreadsheet;
    if (file.type.includes('image')) return ImageIcon;
    return FileText;
  };

  const Icon = getFileIcon();

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium">{file.name}</p>
        <p className="text-xs text-muted-foreground">
          {formatFileSize(file.size)}
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0"
        onClick={() => onRemove(file.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
