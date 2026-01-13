import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Lightbulb, Target } from 'lucide-react';

export const metadata = {
  title: 'About - Pricing Strategy AI',
  description: 'Learn about our AI-powered pricing strategy platform',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">
          About Pricing Strategy AI
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Empowering executives with AI-driven pricing intelligence based on
          proven methodologies from "The Strategy and Tactics of Pricing".
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Evidence-Based</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built on proven pricing frameworks from leading academic
                research and real-world business applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>C-Level Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Designed specifically for strategic decision-makers who need
                fast, accurate pricing insights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI-Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Leverages advanced AI to analyze data, generate insights, and
                recommend optimal pricing strategies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Action-Oriented</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Delivers concrete, implementable recommendations, not just
                analysis.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Approach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Pricing Strategy AI combines the best of academic research with
              practical business application. We focus on three core principles:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Value-Based Pricing:</strong> Price based on the value
                you deliver, not your costs.
              </li>
              <li>
                <strong>Customer Segmentation:</strong> Different customers have
                different willingness to pay.
              </li>
              <li>
                <strong>Strategic Positioning:</strong> Your price signals your
                market position and quality.
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
