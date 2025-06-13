# React + Vite Netlify Deployment Example

This is a simple React + Vite application created to demonstrate deployment to Netlify.

## Features

- Modern React with TypeScript
- Vite for fast development and building
- Simple UI with a welcome message and interactive button
- Pre-configured for Netlify deployment

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deploying to Netlify

This project is pre-configured for deployment to Netlify. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign in to [Netlify](https://www.netlify.com/) and select "New site from Git".
3. Choose your repository and configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site".

Netlify will automatically deploy your site and provide you with a URL.
