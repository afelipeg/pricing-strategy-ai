# Setup Guide - Pricing Strategy AI

## Prerequisites

### Required Node.js Version
This project requires **Node.js 20.9.0 or higher** due to Next.js 14 requirements.

Current detected version: `v15.11.0` ❌

### Upgrading Node.js

#### Option 1: Using nvm (Recommended)
```bash
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 20
nvm install 20

# Use Node.js 20
nvm use 20

# Set as default
nvm alias default 20
```

#### Option 2: Using Homebrew (macOS)
```bash
# Update Homebrew
brew update

# Install Node.js 20
brew install node@20

# Link it
brew link node@20
```

#### Option 3: Download from nodejs.org
Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version (20.x)

## Installation Steps

Once you have Node.js 20+ installed:

### 1. Verify Node Version
```bash
node --version
# Should output v20.x.x or higher
```

### 2. Install Dependencies
```bash
cd pricing-strategy-ai
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Error: "Unsupported engine"
**Problem**: Node.js version is too old

**Solution**: Upgrade to Node.js 20+ (see above)

### Error: "Cannot find module"
**Problem**: Dependencies not installed properly

**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Error: Port 3000 already in use
**Problem**: Another process is using port 3000

**Solution**:
```bash
# Use a different port
npm run dev -- -p 3001
```

Or kill the process using port 3000:
```bash
lsof -ti:3000 | xargs kill
```

### Build Errors
If you encounter build errors:

1. **Clear Next.js cache**
```bash
rm -rf .next
npm run dev
```

2. **Check TypeScript errors**
```bash
npm run lint
```

3. **Verify all files are present**
```bash
# Should show all project files
find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules
```

## Project Structure Verification

After installation, verify your structure:

```
pricing-strategy-ai/
├── app/                    ✓
├── components/             ✓
├── lib/                    ✓
├── public/                 ✓
├── package.json            ✓
├── tsconfig.json          ✓
├── tailwind.config.ts     ✓
└── next.config.js         ✓
```

## Running in Production

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Development Tips

### Hot Reload
The development server supports hot reload. Changes to files will automatically refresh the browser.

### TypeScript Type Checking
```bash
# Run type checking
npx tsc --noEmit
```

### ESLint
```bash
# Run linter
npm run lint
```

### Format Check
If you have Prettier installed:
```bash
npx prettier --check .
```

## Getting Help

If you encounter issues not covered here:

1. Check the main [README.md](./README.md)
2. Review Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
3. Check the GitHub issues (if applicable)

## Success Checklist

- [ ] Node.js 20+ installed
- [ ] Dependencies installed successfully
- [ ] Dev server runs without errors
- [ ] Can access localhost:3000
- [ ] Landing page loads correctly
- [ ] Can navigate to /chat
- [ ] Theme toggle works
- [ ] No TypeScript errors

Once all items are checked, you're ready to develop!
