# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DialerGPT is a Next.js 14 marketing landing page for an AI-powered lead qualification system. It showcases an AI voice calling service that qualifies sales leads automatically.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Theme**: next-themes for dark/light mode
- **DevTools**: Tempo DevTools (configured in tempo.config.json)

## Common Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Build
npm run build        # Production build

# Production
npm start           # Start production server
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with ThemeProvider
│   ├── page.tsx          # Main landing page (Hero, Features, Pricing, Footer)
│   └── globals.css       # Global styles with CSS variables
├── components/
│   ├── HeroSection.tsx        # Hero with animated background and live call demo
│   ├── HowItWorksSection.tsx  # How it works section
│   ├── PricingSection.tsx     # Pricing tiers
│   ├── theme-provider.tsx     # Theme provider wrapper
│   ├── theme-switcher.tsx     # Dark/light mode toggle
│   ├── language-switcher.tsx  # Language selection
│   └── ui/                    # shadcn/ui components
└── lib/
    └── utils.ts              # Utility functions (cn helper)
```

## Design System

### Color Palette
The design uses a gradient-based brand identity centered around purple-to-blue gradients:
- **Primary**: Purple (#8B5CF6) to Blue (#3B82F6)
- **Success**: Green
- **Warning**: Yellow/Orange
- **Accent**: Pink

### Custom CSS Classes
- `.gradient-text` - Purple-to-blue gradient text
- `.gradient-bg` - Subtle gradient background
- `.glass-effect` - Glassmorphism effect
- `.brand-shadow` - Custom purple shadow

### Theme Variables
CSS variables are defined in globals.css for both light and dark modes using HSL values. Custom brand colors include `--brand-purple`, `--brand-blue`, `--brand-green`, `--brand-orange`, `--brand-pink`.

## Key Architecture Notes

### shadcn/ui Integration
- Components are installed via `components.json` configuration
- Alias paths: `@/components` and `@/lib/utils`
- All UI components support dark mode via CSS variables
- Style: "default" with neutral base color

### Theme System
- Uses `next-themes` with system preference detection
- Dark mode toggled via `class` attribute on `<html>`
- Suppresses hydration warnings with `suppressHydrationWarning`

### Layout Pattern
The main page (app/page.tsx) imports section components (HeroSection, HowItWorksSection, PricingSection) and assembles them into a single-page layout with navigation and footer inline.

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Gradient backgrounds with blur effects for visual depth
- Card-based layouts with hover animations

## Adding New Components

When adding shadcn/ui components, use the standard import pattern:
```tsx
import { Component } from "@/components/ui/component"
```

All shadcn components are pre-configured with the design system tokens and dark mode support.

## Image Configuration

External images are allowed from `images.unsplash.com` (see next.config.js).