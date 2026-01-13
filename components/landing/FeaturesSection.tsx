import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  FileText,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Target,
    title: 'Value-Based Pricing',
    description:
      'Determine optimal pricing based on customer value perception, not just costs or competition.',
  },
  {
    icon: TrendingUp,
    title: 'Price Elasticity Analysis',
    description:
      'Understand how demand responds to price changes with AI-powered elasticity modeling.',
  },
  {
    icon: Users,
    title: 'Customer Segmentation',
    description:
      'Identify distinct customer segments with varying willingness to pay for precision pricing.',
  },
  {
    icon: BarChart3,
    title: 'Competitive Intelligence',
    description:
      'Analyze competitive positioning and develop strategic pricing responses.',
  },
  {
    icon: FileText,
    title: 'Instant Reports',
    description:
      'Generate executive-ready pricing strategy reports and presentations in seconds.',
  },
  {
    icon: Zap,
    title: 'Real-Time Insights',
    description:
      'Get immediate answers to complex pricing questions with conversational AI.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Everything You Need for{' '}
            <span className="text-primary">Strategic Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools and insights to transform your pricing strategy
            from reactive to proactive.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
