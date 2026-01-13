# Pricing Strategy AI

> AI-powered pricing strategy assistant for C-level executives, based on "The Strategy and Tactics of Pricing"

## Overview

Pricing Strategy AI is a premium executive application that combines advanced AI with proven pricing methodologies to help business leaders make confident, data-driven pricing decisions. Built with Next.js 14 and designed with an Apple-inspired minimalist aesthetic.

## Features

### Current (Phase 1 - MVP)
- **Premium Chat Interface**: Split-view design with chat and artifacts panel
- **File Upload**: Drag-and-drop support for PDFs, Excel, CSV, and images
- **Smart Responses**: Context-aware AI responses based on pricing strategy keywords
- **Artifact Generation**: Placeholder system for visualizations and reports
- **Dark Mode**: System-aware theme switching
- **Responsive Design**: Mobile-first approach with optimized desktop experience

### Coming Soon

#### Phase 2: Advanced Visualizations
- Interactive pricing analysis charts (Recharts)
- Price elasticity curve visualization
- Competitive positioning matrix
- Customer segmentation maps
- Value waterfall charts
- Real-time data tables

#### Phase 3: RAG & Knowledge Base
- Document ingestion and processing
- Vector database integration (Pinecone/Weaviate)
- Book knowledge: "The Strategy and Tactics of Pricing"
- Case studies library
- Industry-specific pricing frameworks
- Historical pricing data analysis

#### Phase 4: Production AI Integration
- Anthropic Claude API integration
- OpenAI GPT-4 integration
- Multi-model support and fallbacks
- Streaming responses
- Context management
- Advanced prompt engineering

## Tech Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Charts**: Recharts (Phase 2)
- **Theme**: next-themes

### Dependencies
```json
{
  "next": "^14.2.0",
  "react": "^18.2.0",
  "typescript": "^5.3.0",
  "tailwindcss": "^3.4.0",
  "recharts": "^2.10.0",
  "lucide-react": "^0.300.0",
  "next-themes": "^0.2.1",
  "react-dropzone": "^14.2.3",
  "@radix-ui/react-*": "^1.0.x"
}
```

## Project Structure

```
pricing-strategy-ai/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with theme
│   ├── globals.css           # Global styles
│   ├── chat/
│   │   └── page.tsx          # Chat interface page
│   ├── about/
│   │   └── page.tsx          # About page
│   └── api/
│       ├── chat/
│       │   └── route.ts      # Chat endpoint (mock)
│       ├── upload/
│       │   └── route.ts      # File upload endpoint
│       └── parse/
│           └── route.ts      # File parsing endpoint
├── components/
│   ├── ui/                   # shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   └── scroll-area.tsx
│   ├── chat/                 # Chat components
│   │   ├── ChatInterface.tsx
│   │   ├── MessageList.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── InputArea.tsx
│   │   ├── FileUpload.tsx
│   │   ├── FilePreview.tsx
│   │   └── TypingIndicator.tsx
│   ├── artifacts/            # Artifact components
│   │   ├── ArtifactPanel.tsx
│   │   └── ArtifactRenderer.tsx
│   ├── layout/               # Layout components
│   │   └── Navbar.tsx
│   ├── landing/              # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── CTASection.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── utils.ts              # Utility functions
│   └── types/
│       ├── artifacts.ts      # Artifact types
│       └── message.ts        # Message types
└── public/
```

## Getting Started

### Prerequisites
- Node.js 18+ (required for Next.js 14)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd pricing-strategy-ai
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Usage

### Chat Interface
1. Navigate to `/chat` from the landing page
2. Type questions about pricing strategy
3. Upload files (Excel, CSV, PDF, images) for analysis
4. View generated artifacts in the right panel

### Example Questions
- "How should I implement value-based pricing?"
- "What is price elasticity and how do I measure it?"
- "Help me analyze competitive pricing in my market"
- "Create a customer segmentation strategy"

## Configuration

### Environment Variables (Phase 4)
Create a `.env.local` file:

```env
# AI Provider (Phase 4)
ANTHROPIC_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here

# Database (Phase 3)
DATABASE_URL=your_database_url

# Vector Database (Phase 3)
PINECONE_API_KEY=your_key_here
PINECONE_ENVIRONMENT=your_environment
```

### Customization

#### Colors
Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#1e3a8a',  // Your primary color
    light: '#3b82f6',
    dark: '#1e40af'
  },
  // ... more colors
}
```

#### Fonts
Update fonts in `app/layout.tsx`:

```typescript
const customFont = YourFont({
  subsets: ['latin'],
  variable: '--font-custom',
});
```

## Development Roadmap

### ✅ Phase 1: MVP (Current)
- [x] Next.js 14 setup
- [x] UI component library
- [x] Landing page
- [x] Chat interface
- [x] File upload system
- [x] Mock API endpoints
- [x] Dark mode
- [x] Responsive design

### 🚧 Phase 2: Visualizations (Next)
- [ ] Recharts integration
- [ ] Pricing analysis charts
- [ ] Elasticity curves
- [ ] Competitive matrices
- [ ] Interactive data tables
- [ ] Export functionality

### 📋 Phase 3: RAG & Knowledge
- [ ] Document processing pipeline
- [ ] Vector database setup
- [ ] Book content ingestion
- [ ] Semantic search
- [ ] Context retrieval
- [ ] Citation system

### 🚀 Phase 4: Production AI
- [ ] Anthropic Claude integration
- [ ] OpenAI integration
- [ ] Streaming responses
- [ ] Context management
- [ ] Rate limiting
- [ ] Error handling
- [ ] Analytics

## Design Philosophy

### Apple-Inspired Aesthetics
- Generous whitespace (min 16px)
- Subtle shadows and borders
- Smooth transitions
- Clean typography
- Premium color palette
- Focused user experience

### Executive-First
- Minimal cognitive load
- Clear information hierarchy
- Action-oriented design
- Professional appearance
- Fast interaction patterns

## Contributing

This is a private project. For questions or suggestions, please contact the development team.

## License

Proprietary and confidential.

## Support

For support inquiries, please reach out to the project maintainer.

---

**Built with precision for C-level decision makers.**
