# DialerGPT

AI-powered lead qualification platform featuring an interactive voice calling system that helps sales teams practice their pitch, master objection handling, and build confidence before engaging with real prospects.

Built with Next.js 14, TypeScript, and shadcn/ui components, DialerGPT delivers a modern, performant landing page with beautiful gradients, glassmorphism effects, and dark mode support.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Testing](#testing)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- **AI Voice Calling System**: Interactive voice AI for lead qualification practice
- **Real-time Analytics Dashboard**: Track performance metrics and insights
- **ROI Calculator**: Demonstrate cost savings and efficiency gains
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Dark Mode**: System preference detection with manual toggle
- **Premium UI**: Glassmorphism effects, gradient animations, and floating elements
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Type-Safe**: Full TypeScript coverage for reliability
- **Component Library**: Comprehensive shadcn/ui component integration
- **Testing Suite**: Jest and React Testing Library for quality assurance

## Tech Stack

### Core Framework
- **Next.js 14.2.35**: React framework with App Router, Server Components, and optimized routing
- **React 18**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development with strict mode enabled

### Styling & UI
- **Tailwind CSS 3**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: High-quality components built on Radix UI primitives
- **Radix UI**: Accessible, unstyled component primitives
- **next-themes**: Theme management with dark/light mode support
- **tailwindcss-animate**: Animation utilities
- **Framer Motion**: Advanced animations and transitions

### Testing & Quality
- **Jest 30**: JavaScript testing framework
- **React Testing Library 16**: Component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting

### Additional Libraries
- **Lucide React**: Icon library
- **class-variance-authority**: Type-safe variant management
- **clsx**: Utility for constructing className strings
- **Supabase**: Backend as a Service (optional integration)
- **Stripe**: Payment processing (optional integration)

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher (comes with Node.js)
- **Git**: For version control

Check your versions:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be v9.0.0 or higher
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your configuration (see [Environment Variables](#environment-variables))

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Components are located in `src/components/`.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
- Generates optimized static assets
- Performs type checking
- Minifies JavaScript and CSS
- Optimizes images
- Creates production bundles

### Running Production Build

After building, start the production server:

```bash
npm start
```

The production server runs on [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 with hot-reload |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server (requires build first) |
| `npm test` | Run Jest tests in single-run mode |
| `npm run test:watch` | Run tests in watch mode for development |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run lint:fix` | Automatically fix ESLint errors where possible |

## Project Structure

```
dial/
├── __tests__/                    # Test files
│   ├── HeroSection.test.tsx      # Hero section component tests
│   └── PricingSection.test.tsx   # Pricing section component tests
├── public/                       # Static assets
│   └── favicon.ico              # Site favicon
├── src/                         # Source code
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout with ThemeProvider
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles with CSS variables
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui components (47 components)
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── card.tsx         # Card component
│   │   │   ├── dialog.tsx       # Dialog/modal component
│   │   │   ├── input.tsx        # Input field component
│   │   │   ├── tabs.tsx         # Tabs component
│   │   │   └── ...              # Additional UI primitives
│   │   ├── AnalyticsSection.tsx      # Analytics dashboard preview
│   │   ├── FeaturesSection.tsx       # Features showcase
│   │   ├── FeedbackModal.tsx         # User feedback modal
│   │   ├── Footer.tsx                # Site footer
│   │   ├── HeroSection.tsx           # Hero with animated background
│   │   ├── HowItWorksSection.tsx     # Process explanation section
│   │   ├── language-switcher.tsx     # Language selection component
│   │   ├── Navbar.tsx                # Navigation bar
│   │   ├── PricingSection.tsx        # Pricing tiers
│   │   ├── QuizModal.tsx             # Interactive quiz modal
│   │   ├── ROISection.tsx            # ROI calculator/information
│   │   ├── theme-provider.tsx        # Theme context provider
│   │   ├── theme-switcher.tsx        # Dark/light mode toggle
│   │   └── TrustedBySection.tsx      # Social proof section
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── .env.local.example           # Example environment variables
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── jest.config.js               # Jest testing configuration
├── jest.setup.js                # Jest setup file
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

### Key Files Explained

- **`src/app/layout.tsx`**: Root layout component that wraps all pages with ThemeProvider and sets up metadata
- **`src/app/page.tsx`**: Main landing page that composes all sections (Hero, Features, Pricing, etc.)
- **`src/app/globals.css`**: Global styles including CSS custom properties for theming and custom utility classes
- **`src/lib/utils.ts`**: Shared utility functions, primarily the `cn()` helper for conditional class merging
- **`components.json`**: Configuration for shadcn/ui CLI tool (component style, paths, aliases)
- **`next.config.js`**: Next.js configuration including image domains whitelist
- **`tailwind.config.ts`**: Tailwind configuration with custom theme extensions and design tokens

## Design System

### Color Palette

DialerGPT uses a sophisticated gradient-based brand identity:

#### Brand Colors (HSL)
- **Purple**: `262 80% 50%` - Primary brand color
- **Indigo**: `245 80% 60%` - Secondary gradient color
- **Blue**: `220 90% 60%` - Tertiary gradient color
- **Cyan**: `190 90% 50%` - Accent color
- **Teal**: `170 80% 45%` - Complementary color

#### Semantic Colors
- **Primary**: Purple (`263.4 70% 50.4%`) - Main interactive elements
- **Secondary**: Dark gray - Supporting elements
- **Muted**: Subtle gray - Less prominent content
- **Destructive**: Red - Error states and warnings
- **Accent**: Context-specific highlights

### CSS Custom Classes

Located in `src/app/globals.css`:

#### Glass Effects
```css
.glass-panel
/* Glassmorphism effect with backdrop blur and semi-transparent background */
/* Usage: Premium cards, modals, overlays */

.glass-card
/* Interactive glass card with hover effects */
/* Usage: Feature cards, pricing tiers */
```

#### Gradient Utilities
```css
.gradient-text
/* Animated gradient text effect (indigo → purple → cyan) */
/* Usage: Headlines, emphasis text */

.gradient-border
/* Gradient border wrapper */
/* Usage: Premium CTAs, highlighted sections */

.hero-glow
/* Radial gradient glow effect for backgrounds */
/* Usage: Hero section, spotlight effects */
```

#### Animations
```css
.animate-gradient-x
/* Horizontal gradient animation (15s loop) */

.animate-float
/* Floating animation (6s ease-in-out) */

.animation-delay-200
.animation-delay-400
.animation-delay-600
/* Staggered animation delays */
```

### Theme Variables

All colors are defined as CSS custom properties in `globals.css` using HSL values. This enables:
- Dynamic theme switching (light/dark modes)
- Consistent color usage across components
- Easy maintenance and updates
- Proper contrast ratios

Example usage:
```tsx
<div className="bg-background text-foreground">
  <h1 className="gradient-text">DialerGPT</h1>
  <div className="glass-card">Content</div>
</div>
```

### Typography

- **Font**: System font stack for optimal performance and native feel
- **Scales**: Tailwind's default type scale
- **Rendering**: Antialiased for smooth text rendering

### Responsive Breakpoints

Using Tailwind's default breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px (custom container max-width)

### Component Architecture

All shadcn/ui components:
- Support dark mode via CSS variables
- Use Radix UI primitives for accessibility
- Include TypeScript types
- Follow consistent variant patterns
- Support custom className props via `cn()` utility

## Testing

### Test Suite

Tests are written using **Jest** and **React Testing Library** following best practices:
- Component behavior over implementation
- Accessibility-first queries
- User-centric testing approach

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory.

### Test Configuration

- **Jest Config**: `jest.config.js` - Custom Next.js Jest setup
- **Setup File**: `jest.setup.js` - Global test setup (e.g., @testing-library/jest-dom)
- **Module Mapping**: Handles `@/` path aliases

### Writing Tests

Example test structure:
```tsx
import { render, screen } from '@testing-library/react';
import Component from '@/components/Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
```

### Test Coverage

Current coverage includes:
- `HeroSection.test.tsx`: Hero section rendering and interactions
- `PricingSection.test.tsx`: Pricing tier display and CTAs

To expand coverage, add tests for additional components in the `__tests__/` directory.

## Deployment

### Vercel (Recommended)

DialerGPT is optimized for deployment on Vercel, the platform from the creators of Next.js.

#### Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js and configures build settings
6. Add environment variables (if any)
7. Click "Deploy"

#### Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview environment
vercel

# Deploy to production
vercel --prod
```

### Build Configuration

Default build settings (auto-detected by Vercel):
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Other Deployment Options

#### Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t dialergpt .
docker run -p 3000:3000 dialergpt
```

#### Static Export (if applicable)

For static hosting (Netlify, AWS S3, etc.):
```bash
npm run build
# Deploy the .next/static folder
```

Note: Some features (like API routes) require a Node.js server.

### Performance Optimization

The production build includes:
- Automatic code splitting
- Image optimization via Next.js Image component
- CSS minification
- JavaScript minification and tree-shaking
- Static generation where possible
- Caching strategies

## Environment Variables

DialerGPT uses environment variables for optional third-party integrations.

### Setup

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your values

### Available Variables

#### Email Service (Resend)
```env
# Required for quiz email notifications
# Get your API key at https://resend.com
RESEND_API_KEY=re_your_api_key_here
```

#### Quiz Webhook (Optional)
```env
# Optional webhook URL for quiz submissions
QUIZ_WEBHOOK_URL=https://your-webhook-url.com/endpoint
```

#### Supabase (Optional)
```env
# If using Supabase for backend
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Environment Variable Scope

- **`NEXT_PUBLIC_*`**: Exposed to the browser (use for public configuration)
- **No prefix**: Server-side only (use for sensitive keys)

### Production Environments

For Vercel deployments:
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Select environments (Production, Preview, Development)
4. Redeploy to apply changes

## Adding shadcn/ui Components

DialerGPT uses the shadcn/ui component system. New components can be added via the CLI.

### Installation

```bash
# Add a single component
npx shadcn-ui@latest add button

# Add multiple components
npx shadcn-ui@latest add button input card
```

This command:
- Downloads the component source to `src/components/ui/`
- Includes TypeScript types
- Configures component with project theme
- Adds necessary dependencies

### Usage

Import components using the configured alias:
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Available Components

47 shadcn/ui components are currently installed, including:
- **Layout**: Card, Tabs, Accordion, Resizable, Sheet
- **Forms**: Button, Input, Label, Checkbox, Calendar, Form
- **Overlays**: Dialog, Alert Dialog, Popover, Tooltip, Drawer
- **Navigation**: Navigation Menu, Dropdown Menu, Context Menu, Menubar
- **Feedback**: Alert, Progress, Toast
- **Data Display**: Avatar, Badge, Carousel, Hover Card, Scroll Area
- **Utilities**: Icons, Collapsible, Aspect Ratio, Separator

See `src/components/ui/` for the complete list.

## Contributing

We welcome contributions to DialerGPT! Here's how to get started:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow existing code style
   - Add tests for new functionality
   - Update documentation as needed
4. **Run quality checks**
   ```bash
   npm run lint
   npm test
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### Code Style

- **TypeScript**: Use strict typing, avoid `any`
- **React**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Organize imports (React → Next.js → Third-party → Local)
- **CSS**: Prefer Tailwind utilities over custom CSS
- **Comments**: Explain "why", not "what"

### Commit Convention

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Testing Requirements

- Add tests for new components
- Maintain or improve coverage
- Ensure all tests pass before submitting PR

## Architecture Notes

### Next.js App Router

DialerGPT uses the modern App Router (not Pages Router):
- File-based routing in `src/app/`
- Server Components by default
- Client Components marked with `"use client"`
- Layouts for shared UI structure
- Automatic code splitting

### Component Patterns

- **Server Components**: Default for better performance (static content)
- **Client Components**: For interactivity (marked with `"use client"`)
- **Composition**: Small, focused components composed into larger sections
- **Props**: Type-safe with TypeScript interfaces

### State Management

- React hooks (useState, useEffect) for local state
- Context API (ThemeProvider) for global state
- No external state library needed for current scope

### Image Handling

External images configured in `next.config.js`:
```js
images: {
  domains: ['images.unsplash.com']
}
```

Use Next.js Image component for optimization:
```tsx
import Image from 'next/image';
<Image src="..." alt="..." width={400} height={300} />
```

## Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm run dev
```

**Module not found errors**
```bash
# Clear Next.js cache and reinstall
rm -rf .next node_modules
npm install
```

**Type errors after updating dependencies**
```bash
# Regenerate TypeScript types
npm run build
```

**Tests failing**
```bash
# Clear Jest cache
npm test -- --clearCache
```

## License

Private - All rights reserved

## Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Contact: hello@dialergpt.com

---

**Built with**
Next.js 14 | TypeScript | Tailwind CSS | shadcn/ui | Radix UI
