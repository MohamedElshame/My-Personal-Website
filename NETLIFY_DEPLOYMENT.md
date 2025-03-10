# Netlify Deployment Guide for Your Personal Website

This guide will walk you through deploying your Next.js personal website to Netlify, ensuring smooth performance and optimal user experience.

## Prerequisites

- A GitHub account with your website code pushed to a repository
- A Netlify account (free tier is sufficient)
- Your project must be properly configured for production builds

## Step 1: Prepare Your Project for Deployment

### 1. Ensure all dependencies are correctly installed

```bash
npm install
# or
yarn install
```

### 2. Update package.json (already configured correctly)

Your `package.json` already has the correct scripts:
- `build`: Builds the application for production
- `start`: Starts the production server

### 3. Add a netlify.toml file to the root of your project

Create a new file called `netlify.toml` with the following content:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NEXT_USE_NETLIFY_EDGE = "true"
```

## Step 2: Connect to Netlify

### 1. Sign up or log in to Netlify

Go to [https://app.netlify.com/](https://app.netlify.com/) and sign up or log in.

### 2. Create a new site from Git

- Click "Add new site" > "Import an existing project"
- Select GitHub as your Git provider
- Authorize Netlify to access your GitHub repositories
- Select your personal website repository

### 3. Configure build settings

- Build command: `npm run build`
- Publish directory: `.next`
- Click "Show advanced" and add the following environment variables if needed:
  - `NEXT_PUBLIC_BASE_URL`: Your site's URL (optional, will be automatically set by Netlify)

### 4. Deploy your site

Click "Deploy site". Netlify will start building and deploying your website.

## Step 3: Configure Domain Settings (Optional)

### 1. Add a custom domain

- Go to "Site settings" > "Domain management"
- Click "Add custom domain"
- Enter your domain name and follow the instructions

### 2. Enable HTTPS

- Netlify provides free SSL certificates with Let's Encrypt
- Go to "Site settings" > "Domain management" > "HTTPS"
- Click "Verify DNS configuration" and follow the steps

## Step 4: Post-Deployment Optimizations

### 1. Enable Netlify's asset optimization

- Go to "Site settings" > "Build & deploy" > "Post processing"
- Enable "Asset optimization"
- This will compress CSS, JS, and images for better performance

### 2. Configure caching headers

- Create a `_headers` file in your `public` folder:

```
/images/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

### 3. Enable prerendering for static pages

For static pages, use the `getStaticProps` and `getStaticPaths` Next.js features to prerender content.

## Step 5: Monitor and Maintain

### 1. Set up deploy notifications

- Go to "Site settings" > "Build & deploy" > "Deploy notifications"
- Add email or Slack notifications for successful/failed deployments

### 2. Monitor performance

- Use Netlify Analytics to monitor site traffic and performance
- Check deploy logs for any warnings or errors

## Troubleshooting

### Common issues and solutions

1. **Build fails**: Check the build logs for errors. Common causes include:
   - Missing dependencies
   - TypeScript errors
   - Environment variable issues

2. **Page not found errors**: Make sure your routes are correctly configured and your `next.config.js` is properly set up.

3. **Performance issues**: 
   - Use Lighthouse to identify performance bottlenecks
   - Optimize images and animations
   - Implement code splitting

## Additional Resources

- [Netlify Next.js Plugin Documentation](https://github.com/netlify/netlify-plugin-nextjs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com/)
