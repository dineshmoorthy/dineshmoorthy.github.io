# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages at: https://dineshmoorthy.github.io

## Setup Instructions

### 1. GitHub Repository Settings

1. Go to your repository: https://github.com/dineshmoorthy/selfportfolio
2. Go to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/(root)** folder
5. Click **Save**

### 2. Enable GitHub Actions (if not already enabled)

1. Go to **Settings** → **Actions** → **General**
2. Ensure **Allow all actions and reusable workflows** is selected
3. Click **Save**

## Deployment Commands

### Manual Deployment
```bash
# Build and deploy to GitHub Pages
npm run deploy

# Clean deployment (removes old files)
npm run deploy:clean
```

### Automatic Deployment
The project includes a GitHub Actions workflow that automatically deploys when you push to the main branch.

## Project Structure

- **Client App**: Located in `/client` directory
- **Build Output**: `dist/public/` directory
- **Base URL**: `/` (configured in vite.config.ts)
- **Routing**: Hash-based routing for GitHub Pages compatibility

## Important Files

- `vite.config.ts` - Contains base path configuration
- `package.json` - Contains homepage and deployment scripts
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `client/public/404.html` - Handles client-side routing

## Troubleshooting

1. **Build fails**: Run `npm run build:client` to test locally
2. **Assets not loading**: Check that the base path is correct in `vite.config.ts`
3. **Routing issues**: Ensure `404.html` is in the build output
4. **GitHub Pages not updating**: Check the Actions tab for deployment status

## Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build:client

# Preview production build
npx serve dist/public
```