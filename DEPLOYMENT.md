# Deployment Guide - Pricing Strategy AI

## Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Prerequisites
- Vercel account ([sign up](https://vercel.com/signup))
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 20+ installed locally

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
```bash
cd pricing-strategy-ai
git init
git add .
git commit -m "Initial commit: Pricing Strategy AI MVP"
```

2. **Push to GitHub**
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/yourusername/pricing-strategy-ai.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
   - **Install Command**: `npm install`
   - **Node Version**: 20.x

5. Add environment variables (optional for Phase 1):
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

6. Click "Deploy"

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

## Netlify Deployment

### Step 1: Configure Build Settings

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Connect your Git repository
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 20

3. Deploy

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_APP_URL=http://localhost:3000
    restart: unless-stopped
```

### Build & Run

```bash
# Build
docker build -t pricing-strategy-ai .

# Run
docker run -p 3000:3000 pricing-strategy-ai

# Or with docker-compose
docker-compose up -d
```

## Environment Variables

### Phase 1 (Current)
No environment variables required for MVP.

### Phase 2-4 (Future)
```env
# AI Provider
ANTHROPIC_API_KEY=sk-ant-xxx
OPENAI_API_KEY=sk-xxx

# Database
DATABASE_URL=postgresql://user:pass@host:5432/db

# Vector Database
PINECONE_API_KEY=xxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX=pricing-ai

# App
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Performance Optimization

### 1. Enable Caching
Vercel automatically caches static assets. Ensure proper cache headers:

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 2. Image Optimization
Already configured with Next.js Image component. Vercel handles optimization automatically.

### 3. Bundle Analysis

```bash
# Install analyzer
npm install -D @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // your config
});

# Run analysis
ANALYZE=true npm run build
```

## Monitoring

### Vercel Analytics

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Error Tracking

For production, consider integrating:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Vercel Speed Insights**: Performance monitoring

## Security Best Practices

### 1. Environment Variables
- Never commit `.env` files
- Use Vercel/Netlify environment variable management
- Rotate API keys regularly

### 2. API Routes
- Implement rate limiting (Phase 4)
- Validate all inputs
- Use CORS appropriately
- Add authentication (Phase 4)

### 3. Headers
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Post-Deployment Checklist

- [ ] Application loads correctly
- [ ] All routes are accessible
- [ ] Chat interface works
- [ ] File upload functions
- [ ] Theme toggle works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Performance score > 90
- [ ] SSL certificate valid
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking (optional)
- [ ] Error monitoring setup (optional)

## Rollback Strategy

### Vercel
1. Go to Deployments tab
2. Click on previous successful deployment
3. Click "Promote to Production"

### Manual
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push -f origin main
```

## Troubleshooting

### Build Fails
1. Check Node.js version (must be 20+)
2. Clear cache and rebuild
3. Check for TypeScript errors
4. Verify all dependencies are in package.json

### Runtime Errors
1. Check environment variables
2. Review API routes
3. Check browser console
4. Review Vercel function logs

### Performance Issues
1. Analyze bundle size
2. Check for unnecessary re-renders
3. Optimize images
4. Enable caching

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Discussions: Create issue in repository

---

**Your app is production-ready for Phase 1 MVP deployment!**
