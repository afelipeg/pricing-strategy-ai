# Quick Start - Pricing Strategy AI

## TL;DR

```bash
# 1. Ensure Node.js 20+
node --version  # Should be v20.x.x or higher

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
open http://localhost:3000
```

## What You'll See

### Landing Page (/)
- Executive-focused hero section
- 6 key pricing strategy features
- Call-to-action to start chat

### Chat Interface (/chat)
- Split view: Chat (left) + Artifacts (right)
- Type questions about pricing strategy
- Upload files (PDF, Excel, CSV, images)
- Get AI-powered responses (mock data in Phase 1)

### About Page (/about)
- Platform overview
- Methodology explanation

## Demo Queries to Try

Type these in the chat:

1. **"How should I implement value-based pricing?"**
   - Gets detailed framework response

2. **"What is price elasticity?"**
   - Explains elasticity concepts

3. **"Help me analyze competitive pricing"**
   - Discusses competitive strategy

4. **"Create a customer segmentation strategy"**
   - General pricing advice

## Features Working in Phase 1

✅ Premium landing page with dark mode
✅ Responsive chat interface
✅ File upload with drag & drop
✅ Message history display
✅ Typing indicators
✅ Theme toggle (light/dark)
✅ Mobile-responsive design
✅ Mock AI responses based on keywords

## Not Yet Implemented

❌ Real AI integration (Phase 4)
❌ Actual file parsing (Phase 3)
❌ Interactive charts (Phase 2)
❌ Data visualization (Phase 2)
❌ PDF/Excel analysis (Phase 3)
❌ Vector database search (Phase 3)

## File Structure Quick Reference

```
├── app/
│   ├── page.tsx           → Landing page
│   ├── chat/page.tsx      → Chat interface
│   └── api/*/route.ts     → API endpoints (mock)
├── components/
│   ├── chat/*             → Chat UI components
│   ├── artifacts/*        → Artifact rendering
│   ├── landing/*          → Landing sections
│   └── ui/*               → shadcn components
└── lib/
    ├── types/*            → TypeScript types
    └── utils.ts           → Helper functions
```

## Common Issues & Solutions

### Issue: "Unsupported engine"
**Solution**: Upgrade to Node.js 20+
```bash
nvm install 20 && nvm use 20
```

### Issue: "Module not found"
**Solution**: Install dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port 3000 already in use"
**Solution**: Use different port
```bash
npm run dev -- -p 3001
```

### Issue: Build errors
**Solution**: Clear cache
```bash
rm -rf .next && npm run dev
```

## Next Steps

1. **Test the UI**: Navigate through all pages
2. **Try the chat**: Send messages and upload files
3. **Toggle dark mode**: Test theme switching
4. **Check mobile**: Resize browser window
5. **Read docs**: Review README.md for full details

## Development Workflow

```bash
# Start dev server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Key Keyboard Shortcuts

- **Enter**: Send message
- **Shift + Enter**: New line in message
- **Cmd/Ctrl + K**: Focus search (future)

## Where to Go Next

- **Full Documentation**: [README.md](./README.md)
- **Setup Guide**: [SETUP.md](./SETUP.md)
- **Development Guide**: [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Project Overview**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

## Customization Quick Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#your-color',
  }
}
```

### Change Fonts
Edit `app/layout.tsx`:
```typescript
const yourFont = YourFont({ subsets: ['latin'] });
```

### Add New Page
Create `app/your-page/page.tsx`:
```typescript
export default function YourPage() {
  return <div>Your content</div>;
}
```

### Add New Component
Create `components/YourComponent.tsx`:
```typescript
interface Props {
  title: string;
}

export function YourComponent({ title }: Props) {
  return <div>{title}</div>;
}
```

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **TypeScript**: https://www.typescriptlang.org/docs

## Success Checklist

- [ ] Node.js 20+ installed
- [ ] Dependencies installed without errors
- [ ] Dev server running at localhost:3000
- [ ] Landing page loads and looks premium
- [ ] Can navigate to /chat
- [ ] Can send messages in chat
- [ ] File upload dialog opens
- [ ] Theme toggle works (sun/moon icon)
- [ ] Responsive on mobile view
- [ ] No TypeScript errors in console

✅ **All checked? You're ready to develop!**

---

**Total setup time: ~5 minutes (with Node.js 20+)**
