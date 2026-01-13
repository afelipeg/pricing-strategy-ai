/**
 * Types for AI-generated artifacts
 */

export type ArtifactType =
  | 'pricing-analysis'
  | 'value-based-model'
  | 'competitive-matrix'
  | 'elasticity-chart'
  | 'segmentation-map'
  | 'waterfall-chart'
  | 'markdown-report'
  | 'data-table';

export interface Artifact {
  id: string;
  type: ArtifactType;
  title: string;
  description?: string;
  data: unknown;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingAnalysisData {
  currentPrice: number;
  suggestedPrice: number;
  priceRange: {
    min: number;
    max: number;
    optimal: number;
  };
  confidence: number;
  rationale: string[];
}

export interface CompetitiveMatrixData {
  competitors: Array<{
    name: string;
    price: number;
    features: string[];
    marketShare: number;
  }>;
  yourPosition: {
    price: number;
    features: string[];
  };
}

export interface ElasticityChartData {
  dataPoints: Array<{
    price: number;
    demand: number;
    revenue: number;
  }>;
  elasticity: number;
}

export interface SegmentationMapData {
  segments: Array<{
    name: string;
    size: number;
    willingness: number;
    pricePoint: number;
    characteristics: string[];
  }>;
}

export interface WaterfallChartData {
  startValue: number;
  endValue: number;
  steps: Array<{
    label: string;
    value: number;
    type: 'increase' | 'decrease';
  }>;
}
