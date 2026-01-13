import type { Artifact } from '@/lib/types/artifacts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ArtifactRendererProps {
  artifact: Artifact;
}

export function ArtifactRenderer({ artifact }: ArtifactRendererProps) {
  const renderContent = () => {
    switch (artifact.type) {
      case 'pricing-analysis':
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Pricing analysis visualization will appear here
            </p>
            <div className="h-64 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Chart Placeholder
              </span>
            </div>
          </div>
        );

      case 'value-based-model':
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Value-based pricing model will appear here
            </p>
            <div className="h-64 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Model Placeholder
              </span>
            </div>
          </div>
        );

      case 'competitive-matrix':
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Competitive matrix will appear here
            </p>
            <div className="h-64 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Matrix Placeholder
              </span>
            </div>
          </div>
        );

      case 'elasticity-chart':
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Price elasticity chart will appear here
            </p>
            <div className="h-64 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Chart Placeholder
              </span>
            </div>
          </div>
        );

      case 'markdown-report':
        return (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Markdown report content will appear here
            </p>
          </div>
        );

      default:
        return (
          <p className="text-sm text-muted-foreground">
            Unsupported artifact type
          </p>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{artifact.title}</CardTitle>
            {artifact.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {artifact.description}
              </p>
            )}
          </div>
          <Badge variant="secondary">{artifact.type}</Badge>
        </div>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}
