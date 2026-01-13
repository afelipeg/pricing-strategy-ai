'use client';

import { useState } from 'react';
import { MessageList } from './MessageList';
import { InputArea } from './InputArea';
import { ArtifactPanel } from '../artifacts/ArtifactPanel';
import type { Message, FileAttachment } from '@/lib/types/message';
import type { Artifact } from '@/lib/types/artifacts';
import { generateId } from '@/lib/utils';

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (
    content: string,
    files?: FileAttachment[]
  ) => {
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date(),
      attachments: files,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call API endpoint (placeholder)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          files: files?.map((f) => ({ name: f.name, type: f.type })),
        }),
      });

      const data = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: data.message || 'I understand your question. Let me analyze...',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Add artifact if provided
      if (data.artifact) {
        setArtifacts((prev) => [...prev, data.artifact]);
      }
    } catch (error) {
      console.error('Error sending message:', error);

      // Fallback response
      const errorMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content:
          'I apologize, but I encountered an error. This is a demo interface. In production, I would provide detailed pricing strategy insights based on your query.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full">
      {/* Chat Area - 60% on desktop */}
      <div className="flex flex-1 flex-col lg:w-3/5 border-r">
        <div className="flex-1 overflow-hidden">
          <MessageList messages={messages} isLoading={isLoading} />
        </div>
        <InputArea onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>

      {/* Artifacts Panel - 40% on desktop, hidden on mobile */}
      <div className="hidden lg:flex lg:w-2/5 flex-col bg-muted/30">
        <ArtifactPanel artifacts={artifacts} />
      </div>
    </div>
  );
}
