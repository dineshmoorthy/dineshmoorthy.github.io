#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build:client

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your site will be available at: https://dineshmoorthy.github.io"
echo "⏰ It may take a few minutes for changes to appear." 