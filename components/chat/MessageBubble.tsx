import { formatRelativeTime } from '@/lib/utils';
import type { Message } from '@/lib/types/message';
import { User, Sparkles } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-4`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isUser ? 'bg-primary' : 'bg-accent'
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary-foreground" />
        ) : (
          <Sparkles className="h-4 w-4 text-accent-foreground" />
        )}
      </div>

      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`max-w-[85%] rounded-lg px-4 py-3 ${
            isUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground'
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </p>
        </div>
        <span className="mt-1 text-xs text-muted-foreground">
          {formatRelativeTime(message.timestamp)}
        </span>

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.attachments.map((file) => (
              <div
                key={file.id}
                className="rounded-md border bg-muted px-2 py-1 text-xs"
              >
                {file.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
