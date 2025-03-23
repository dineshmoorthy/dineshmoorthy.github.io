# GitHub Pages Deployment Guide for selfportfolio

This repository is configured to automatically deploy to GitHub Pages on https://github.com/dineshmoorthy/selfportfolio when changes are pushed to the main branch. This document explains the deployment process step-by-step.

## Deployment Workflow

The deployment process uses GitHub Actions to build and deploy the portfolio website to GitHub Pages. Here's what happens:

1. When you push changes to the `main` branch, the workflow is triggered automatically
2. The workflow builds the project using `npm run build`
3. The built files are deployed to the `gh-pages` branch of your selfportfolio repository
4. GitHub Pages serves your site from this branch

## Step-by-Step Deployment Instructions

### 1. Push Your Code to GitHub

First, you need to push your Replit project to your GitHub repository:

```bash
# Initialize git (if not already done)
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "Initial commit from Replit"

# Add your GitHub repository as the remote
git remote add origin https://github.com/dineshmoorthy/selfportfolio.git

# Push to the main branch
git push -u origin main
```

### 2. Configure GitHub Repository Settings

1. Go to https://github.com/dineshmoorthy/selfportfolio
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select the `gh-pages` branch
5. Click **Save**

### 3. Set Up Required Permissions (Only Once)

For your first deployment, you might need to set up permissions:

1. Go to your repository **Settings**
2. Navigate to **Actions** > **General** in the left sidebar
3. Scroll down to "Workflow permissions"
4. Select "Read and write permissions"
5. Click **Save**

### 4. Trigger Deployment

The first deployment will happen automatically when you push to the main branch. You can also manually trigger it:

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. Select the "Deploy to selfportfolio GitHub Pages" workflow
4. Click on **Run workflow** > **Run workflow**

### 5. Verify Your Deployment

After the workflow completes:

1. Go to the **Actions** tab to check that the workflow completed successfully
2. Your site will be available at: https://dineshmoorthy.github.io/selfportfolio/

## Troubleshooting

If you encounter issues with the deployment:

1. Check the workflow run in the Actions tab to see any error messages
2. Verify that your repository settings are correctly configured
3. Make sure your build is generating files in the `dist/public` directory
4. Check that the GitHub token has sufficient permissions

## Additional Configuration Options

### Custom Domain

To use a custom domain with your GitHub Pages site:

1. Add a CNAME file to the `client/public` directory with your domain
2. Update your Domain's DNS settings as per GitHub's documentation
3. Configure the custom domain in your repository's GitHub Pages settings

### Environment Variables

If your build requires environment variables:

1. Go to repository **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Add your secrets and reference them in the workflow using `${{ secrets.YOUR_SECRET_NAME }}`