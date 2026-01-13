'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { ArtifactRenderer } from './ArtifactRenderer';
import { FileBarChart } from 'lucide-react';
import type { Artifact } from '@/lib/types/artifacts';

interface ArtifactPanelProps {
  artifacts: Artifact[];
}

export function ArtifactPanel({ artifacts }: ArtifactPanelProps) {
  if (artifacts.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <FileBarChart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No Artifacts Yet</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            AI-generated insights, charts, and reports will appear here as you
            chat.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">
          Artifacts ({artifacts.length})
        </h2>
        <p className="text-sm text-muted-foreground">
          AI-generated insights and visualizations
        </p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {artifacts.map((artifact) => (
            <ArtifactRenderer key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
