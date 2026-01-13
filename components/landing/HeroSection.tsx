import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">
              Powered by Advanced AI
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Strategic Pricing{' '}
            <span className="text-primary">Intelligence</span>
            <br />
            for C-Level Executives
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Transform your pricing strategy with AI-powered insights based on
            proven methodologies from "The Strategy and Tactics of Pricing".
            Make confident, data-driven decisions that maximize profitability.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/chat">
                Start Strategizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">10x</div>
              <div className="text-sm text-muted-foreground">
                Faster Analysis
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">
                Accuracy Rate
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">
                AI Assistant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
