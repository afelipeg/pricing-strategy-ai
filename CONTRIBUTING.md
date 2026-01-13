# Contributing to Pricing Strategy AI

## Development Workflow

### Code Style

#### TypeScript
- Use strict TypeScript mode
- Always define explicit types for function parameters and returns
- Use interfaces for object shapes
- Use type aliases for unions and primitives

```typescript
// Good
interface UserData {
  name: string;
  email: string;
}

function processUser(data: UserData): boolean {
  // ...
}

// Avoid
function processUser(data: any) {
  // ...
}
```

#### React Components
- Use functional components with TypeScript
- Mark client components with 'use client'
- Server components are default (no directive needed)
- Use proper props typing

```typescript
// Client component
'use client';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function CustomButton({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// Server component (default)
export function ServerData() {
  return <div>Server-rendered content</div>;
}
```

#### CSS/Styling
- Use Tailwind utility classes
- Follow the design system in tailwind.config.ts
- Use cn() helper for conditional classes
- Prefer component variants over inline styles

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  error && 'error-classes'
)} />
```

### Component Structure

#### File Organization
```
components/
├── ui/              # Reusable UI primitives (shadcn)
├── chat/            # Chat-specific components
├── artifacts/       # Artifact rendering components
├── layout/          # Layout components (Navbar, Footer)
└── landing/         # Landing page sections
```

#### Component Template
```typescript
'use client'; // Only if needed

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { ComponentProps } from './types';

interface MyComponentProps {
  // Props definition
  title: string;
  onAction?: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  const [state, setState] = useState<string>('');

  const handleClick = () => {
    // Logic
    onAction?.();
  };

  return (
    <div className="component-classes">
      <h2>{title}</h2>
      {/* Content */}
    </div>
  );
}
```

### API Routes

#### Structure
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.requiredField) {
      return NextResponse.json(
        { error: 'Missing required field', success: false },
        { status: 400 }
      );
    }

    // Logic
    const result = await processData(body);

    return NextResponse.json({
      data: result,
      success: true,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
```

### State Management

#### Local State
Use useState for component-local state:
```typescript
const [messages, setMessages] = useState<Message[]>([]);
```

#### Complex State
For complex state, consider useReducer:
```typescript
type Action =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'CLEAR_MESSAGES' };

function chatReducer(state: ChatState, action: Action): ChatState {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'CLEAR_MESSAGES':
      return { ...state, messages: [] };
    default:
      return state;
  }
}
```

### Error Handling

#### Component Level
```typescript
'use client';

import { useEffect, useState } from 'react';

export function DataComponent() {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    }
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{/* Render data */}</div>;
}
```

### Testing (Future)

#### Unit Tests
```typescript
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Git Workflow

#### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

#### Commit Messages
Follow conventional commits:
```
feat: add price elasticity chart component
fix: resolve theme toggle issue in navbar
refactor: simplify message state management
docs: update API documentation
```

#### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] TypeScript checks pass
- [ ] No console errors

## Screenshots (if applicable)
[Add screenshots]
```

### Performance Best Practices

#### 1. Image Optimization
```typescript
import Image from 'next/image';

<Image
  src="/path/to/image.png"
  alt="Description"
  width={500}
  height={300}
  priority // For above-fold images
/>
```

#### 2. Dynamic Imports
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Client-side only if needed
});
```

#### 3. Memoization
```typescript
import { useMemo, useCallback } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

### Accessibility

#### Requirements
- All interactive elements must be keyboard accessible
- Use semantic HTML
- Provide ARIA labels where needed
- Ensure color contrast meets WCAG standards

```typescript
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className="..."
>
  <X className="h-4 w-4" />
</button>
```

### Development Phases

#### Current Phase: MVP (Phase 1)
Focus on:
- Core UI/UX
- Chat interface
- File upload
- Basic interactions

#### Future Phases

**Phase 2: Visualizations**
- Recharts integration
- Interactive charts
- Data tables

**Phase 3: RAG & Knowledge**
- Document processing
- Vector database
- Semantic search

**Phase 4: Production AI**
- AI API integration
- Streaming responses
- Production deployment

## Questions?

Refer to the main [README.md](./README.md) for project overview and roadmap.
