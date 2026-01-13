# Routes & API Reference - Pricing Strategy AI

## Frontend Routes

### Public Pages

#### `/` - Landing Page
- **File**: `app/page.tsx`
- **Components**: HeroSection, FeaturesSection, CTASection
- **Description**: Executive landing page with value proposition
- **Features**:
  - Hero with compelling headline
  - 6 feature cards with icons
  - Statistics section
  - CTA buttons to chat
  - Fully responsive

#### `/chat` - Chat Interface
- **File**: `app/chat/page.tsx`
- **Main Component**: ChatInterface
- **Description**: Main application interface
- **Layout**:
  - Desktop: Split view (60% chat / 40% artifacts)
  - Mobile: Full screen chat
- **Features**:
  - Message history
  - File upload
  - Real-time typing indicators
  - Artifact display panel
  - Auto-scrolling messages

#### `/about` - About Page
- **File**: `app/about/page.tsx`
- **Description**: Platform information and methodology
- **Sections**:
  - Evidence-based approach
  - C-level focus
  - AI-powered insights
  - Action-oriented methodology

## API Routes

### POST `/api/chat`
**Endpoint for chat messages**

**Request Body**:
```typescript
{
  message: string;      // User message
  files?: Array<{       // Optional file attachments
    name: string;
    type: string;
  }>;
}
```

**Response** (Success - 200):
```typescript
{
  message: string;      // AI response
  artifact?: {          // Optional artifact
    id: string;
    type: ArtifactType;
    title: string;
    description?: string;
    data: unknown;
    createdAt: Date;
    updatedAt: Date;
  };
  success: true;
}
```

**Response** (Error - 500):
```typescript
{
  error: string;
  success: false;
}
```

**Current Behavior (Phase 1)**:
- Mock responses based on keywords
- Simulates 1 second processing delay
- Returns contextual responses for:
  - "price"/"pricing" → Value-based pricing framework
  - "elasticity" → Price elasticity explanation
  - "competition" → Competitive strategy advice
  - Other queries → General pricing guidance

**Example Usage**:
```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'How should I implement value-based pricing?',
  }),
});

const data = await response.json();
console.log(data.message); // AI response
console.log(data.artifact); // Optional artifact
```

---

### POST `/api/upload`
**Endpoint for file upload**

**Request Body** (FormData):
```typescript
files: File[];  // Array of files
```

**Response** (Success - 200):
```typescript
{
  files: Array<{
    id: string;
    name: string;
    size: number;
    type: string;
    url: string;      // Mock URL
    uploadedAt: string;
  }>;
  success: true;
  message: string;
}
```

**Response** (Error - 400/500):
```typescript
{
  error: string;
  success: false;
}
```

**Current Behavior (Phase 1)**:
- Accepts file uploads
- Returns mock file metadata
- Simulates 500ms upload delay
- No actual file storage

**File Restrictions**:
- Max size: 10MB per file
- Allowed types:
  - application/pdf
  - application/vnd.ms-excel
  - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
  - text/csv
  - image/png
  - image/jpeg

**Example Usage**:
```typescript
const formData = new FormData();
files.forEach(file => formData.append('files', file));

const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData,
});

const data = await response.json();
console.log(data.files); // Uploaded file metadata
```

---

### POST `/api/parse`
**Endpoint for file parsing**

**Request Body**:
```typescript
{
  fileId: string;
  fileType?: string;
}
```

**Response** (Success - 200):
```typescript
{
  data: {
    // For spreadsheets/CSV
    rows?: number;
    columns?: string[];
    summary?: {
      avgPrice: number;
      totalRevenue: number;
      profitMargin: number;
    };
    // For PDFs
    pages?: number;
    sections?: string[];
    keyInsights?: string[];
  };
  success: true;
  message: string;
}
```

**Response** (Error - 400/500):
```typescript
{
  error: string;
  success: false;
}
```

**Current Behavior (Phase 1)**:
- Mock parsing simulation
- Returns fake extracted data
- Simulates 1.5 second processing
- Different mock data based on file type

**Example Usage**:
```typescript
const response = await fetch('/api/parse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fileId: 'file-123',
    fileType: 'application/pdf',
  }),
});

const data = await response.json();
console.log(data.data); // Parsed file data
```

## Component Routes

### Internal Navigation

```typescript
// Using Next.js Link
import Link from 'next/link';

<Link href="/">Home</Link>
<Link href="/chat">Chat</Link>
<Link href="/about">About</Link>

// Programmatic navigation
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/chat');
```

## URL Parameters (Future)

### `/chat?conversation=<id>` (Phase 3)
Load specific conversation history

### `/chat?artifact=<id>` (Phase 3)
Open chat with specific artifact

### `/chat?file=<id>` (Phase 3)
Open chat with pre-loaded file

## Metadata per Route

### Landing Page
```typescript
{
  title: 'Pricing Strategy AI - Strategic Pricing Intelligence for C-Level Executives',
  description: 'AI-powered pricing strategy assistant based on "The Strategy and Tactics of Pricing". Make data-driven pricing decisions with confidence.',
  keywords: ['pricing strategy', 'value-based pricing', 'price optimization', 'C-level', 'executive', 'AI assistant']
}
```

### Chat Page
```typescript
{
  title: 'Chat - Pricing Strategy AI',
  description: 'Strategic pricing conversation with AI assistant'
}
```

### About Page
```typescript
{
  title: 'About - Pricing Strategy AI',
  description: 'Learn about our AI-powered pricing strategy platform'
}
```

## Error Pages (Auto-generated by Next.js)

### `/404` - Not Found
Automatically handled by Next.js

### `/500` - Server Error
Automatically handled by Next.js

## Static Assets

### `/favicon.ico`
Site favicon (to be added)

### `/images/*` (Future)
Image assets directory

### `/fonts/*` (Future)
Custom fonts directory

## Future Routes (Planned)

### Phase 2-4
- `/dashboard` - Analytics dashboard
- `/history` - Conversation history
- `/settings` - User settings
- `/api/analytics` - Analytics endpoint
- `/api/stream` - Streaming chat responses
- `/api/auth` - Authentication endpoints

## Route Guards (Phase 4)

Future authentication will protect:
- `/chat` - Require authentication
- `/dashboard` - Require authentication
- `/history` - Require authentication
- `/settings` - Require authentication

## CORS Configuration

Current: Same-origin only
Future: Configure for API access

## Rate Limiting (Phase 4)

Will implement:
- `/api/chat`: 100 requests/hour
- `/api/upload`: 20 requests/hour
- `/api/parse`: 50 requests/hour

## Webhooks (Phase 4)

Future endpoints:
- `/api/webhooks/stripe` - Payment events
- `/api/webhooks/analytics` - Analytics events

---

**All routes are functional and tested in Phase 1 MVP.**
