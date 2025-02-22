# GMC Point - Google Merchant Center Optimization

A modern Next.js application for Google Merchant Center optimization services, featuring dynamic animations, interactive UI components, and performance tracking.

## Features

- 🎨 Modern UI with Framer Motion animations
- 📊 Interactive charts and metrics display
- 💫 Custom cursor and hover effects
- 🎯 Case studies showcase
- 📱 Fully responsive design

## Tech Stack

- Next.js 15.1.7
- React 19
- Framer Motion
- TailwindCSS
- Chart.js
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gmc-point.git
cd gmc-point
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── Landing/     # Landing page components
│   ├── ui/          # Reusable UI components
│   └── magicui/     # Special effect components
├── lib/             # Utility functions
└── styles/          # Global styles
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## Environment Variables

Required environment variables for production:

```env
NEXT_PUBLIC_SITE_URL=your-production-url
```

## Performance Optimization

- Font optimization with next/font
- Image optimization with next/image
- Automatic code splitting
- Dynamic imports for heavy components

## License

MIT License - see LICENSE file for details
