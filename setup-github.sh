#!/bin/bash

# This script helps you initialize Git and push your project to GitHub
# It will push your project to https://github.com/dineshmoorthy/selfportfolio

echo "==========================================================="
echo "Setting up Git for deployment to GitHub Pages..."
echo "==========================================================="

# Check if git is already initialized
if [ -d .git ]; then
  echo "Git repository already initialized."
else
  echo "Initializing Git repository..."
  git init
fi

# Add all files to git
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
echo -n "Enter a commit message (default: 'Update portfolio for GitHub Pages'): "
read commit_message
if [ -z "$commit_message" ]; then
  commit_message="Update portfolio for GitHub Pages"
fi
git commit -m "$commit_message"

# Check if remote already exists
if git remote | grep -q "origin"; then
  echo "Remote 'origin' already exists. Updating URL..."
  git remote set-url origin https://github.com/dineshmoorthy/selfportfolio.git
else
  echo "Adding remote 'origin'..."
  git remote add origin https://github.com/dineshmoorthy/selfportfolio.git
fi

# Push to GitHub
echo "==========================================================="
echo "IMPORTANT: For GitHub Authentication"
echo "==========================================================="
echo "When prompted for password, DO NOT enter your GitHub password."
echo "Instead, use a Personal Access Token (PAT)."
echo ""
echo "If you don't have a PAT, create one at:"
echo "https://github.com/settings/tokens"
echo ""
echo "Select these scopes: repo, workflow"
echo "==========================================================="

echo "Pushing to GitHub (enter your GitHub username and PAT when prompted)..."
git push -u origin main

echo ""
echo "==========================================================="
echo "Setup complete! Your code has been pushed to GitHub."
echo "==========================================================="
echo "IMPORTANT NEXT STEPS:"
echo ""
echo "1. Go to your repository: https://github.com/dineshmoorthy/selfportfolio"
echo "2. Click on 'Actions' tab to monitor the deployment workflow"
echo "3. After workflow completes, go to repository 'Settings' > 'Pages'"
echo "4. Under 'Build and deployment' > 'Source', select 'Deploy from a branch'"
echo "5. Select 'gh-pages' branch and '/ (root)' folder, then click 'Save'"
echo "6. Your site will be deployed to: https://dineshmoorthy.github.io/selfportfolio/"
echo ""
echo "For troubleshooting, see the GITHUB_PAGES_DEPLOYMENT.md file."
echo "==========================================================="