# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. This document explains how the deployment process works and how to configure it.

## Deployment Workflow

The deployment process uses GitHub Actions to build and deploy the portfolio website to GitHub Pages. Here's what happens:

1. When you push changes to the `main` branch, the workflow is triggered automatically
2. The workflow builds the project using `npm run build`
3. The built files are then deployed to GitHub Pages

## Setup Instructions

To make this deployment work with your GitHub repository, follow these steps:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to the **GitHub Pages** section
4. Under **Source**, select **GitHub Actions**

### 2. Configure Your Repository

The workflow is already set up in `.github/workflows/deploy.yml`, but you might need to make a few adjustments:

- Make sure your repository has the `main` branch (not `master`)
- If your default branch is different, update the workflow file to match

### 3. First Deployment

The first deployment will happen automatically when you push this repository to GitHub. You can also manually trigger a deployment:

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. Select the "Deploy Portfolio Website to GitHub Pages" workflow
4. Click on **Run workflow**

### 4. Verify Your Deployment

After the workflow completes:

1. Go to your repository settings
2. Scroll down to the GitHub Pages section
3. You'll see the URL where your site is published (typically `https://yourusername.github.io/your-repo-name/`)

## Troubleshooting

If you encounter issues with the deployment:

1. Check the workflow run in the Actions tab to see any error messages
2. Make sure your build is generating files in the `dist/public` directory
3. Verify that your GitHub Pages settings are correctly configured

## Additional Configuration Options

### Custom Domain

To use a custom domain with your GitHub Pages site:

1. Add a CNAME file to the `client/public` directory with your domain
2. Configure your domain's DNS settings as described in [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Environment Variables

If your build requires environment variables:

1. Add them to your GitHub repository as secrets
2. Reference them in the workflow file using `${{ secrets.YOUR_SECRET_NAME }}`