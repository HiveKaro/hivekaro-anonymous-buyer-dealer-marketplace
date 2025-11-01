# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

HiveKaro is an anonymous community marketplace platform that connects vehicle buyers with verified dealers through blind quotations. Built as a Next.js 15.3.5 application with React 19, TypeScript, and Tailwind CSS v4. The project is currently in early development/prototype stage with a statically exported site configured for GitHub Pages deployment.

**Current Stage:** Early prototype - core marketplace functionality (buyer groups, blind quotes, dealer verification) not yet implemented. Most pages are static marketing/landing pages.

## Common Development Commands

### Development
```bash
# Start development server with Turbopack
npm run dev

# Development server runs at http://localhost:3000
```

### Building & Deployment
```bash
# Build for production (static export)
npm run build

# Output directory: ./out (static HTML/CSS/JS)

# Start production server (for testing build)
npm start

# Lint codebase
npm run lint
```

**Important:** The project uses static export (`output: 'export'`) for GitHub Pages. This means:
- No server-side API routes
- No dynamic server-side rendering
- Images are unoptimized (required for static export)
- All data fetching must be client-side

### Testing
⚠️ **No test infrastructure currently exists.** When implementing tests:
- Set up Vitest or Jest for unit/integration tests
- Add React Testing Library for component tests
- Consider Playwright for E2E testing

## Tech Stack

- **Framework:** Next.js 15.3.5 with App Router
- **React:** 19.0.0 (latest)
- **Language:** TypeScript 5.x with strict mode
- **Styling:** Tailwind CSS v4 with CSS variables
- **UI Components:** shadcn/ui (60+ Radix UI primitives with custom styling)
- **Forms:** React Hook Form 7.60.0 with Zod 4.1.12 validation
- **Animations:** Framer Motion 12.x
- **Database (not yet implemented):** Drizzle ORM with LibSQL client
- **Authentication (not yet implemented):** Better-Auth 1.3.10
- **Build Tool:** Turbopack (Next.js built-in)
- **Package Manager:** npm (also has bun.lock but standardize on npm)

## Architecture & Structure

### Directory Organization
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # Static about page
│   ├── buyer-dashboard/   # ⚠️ Currently shows contact info, not functional dashboard
│   ├── contact/           # Contact information page
│   ├── dealer-dashboard/  # ⚠️ Currently shows contact info, not functional dashboard
│   ├── how-it-works/      # Explainer page
│   ├── privacy-policy/    # Legal page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home/landing page (10KB+)
│   └── globals.css        # Global styles with Tailwind
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components (60+ components)
│   ├── Navigation.tsx    # Site navigation component
│   ├── Footer.tsx        # Site footer
│   └── ErrorReporter.tsx # Error reporting (Orchid integration)
├── lib/                   # Utility functions
│   └── utils.ts          # className merger (cn function)
└── hooks/                 # Custom React hooks
    └── use-mobile.ts     # Mobile detection hook
```

### Path Aliases
- `@/*` → `./src/*` (configured in tsconfig.json)
- `@/components` → component imports
- `@/lib/utils` → utility functions

### Component Patterns
This project uses **shadcn/ui** conventions:
- Components follow "New York" style (components.json)
- All UI components use Radix UI primitives
- Styling with Tailwind CSS using CSS variables
- Lucide React for icons
- `cn()` utility for conditional className merging

**Example:**
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

<Button className={cn("custom-class", conditionalClass && "active")} />
```

## Critical Issues & Constraints

### Build Configuration ⚠️
**IMPORTANT:** The following are currently DISABLED in `next.config.ts`:
```typescript
typescript: {
  ignoreBuildErrors: true,  // TypeScript errors are ignored during build
},
eslint: {
  ignoreDuringBuilds: true,  // ESLint errors are ignored during build
}
```

**Before production deployment:**
1. Fix all TypeScript errors
2. Fix all ESLint errors
3. Remove these ignore flags
4. Ensure clean builds with `npm run build`

### Security Concerns 🔒
1. **Image Sources:** Currently restricted to `slelguoygbfzlpylpxfs.supabase.co` (Orchid platform)
2. **No Authentication:** Better-Auth installed but not configured - no protected routes exist
3. **No API Layer:** No backend API routes exist yet (static export limitation)
4. **No CSRF Protection:** Will be needed when forms are implemented
5. **No Rate Limiting:** Will be needed for any future API endpoints

### Missing Core Features
The following are **installed but not implemented:**
- ✗ Authentication system (better-auth)
- ✗ Database schema & queries (drizzle-orm, @libsql/client)
- ✗ Form validation (react-hook-form + zod installed but not used)
- ✗ API routes (no src/app/api directory)
- ✗ Error boundaries (ErrorReporter exists only for Orchid)
- ✗ Loading states/skeletons
- ✗ SEO metadata on individual pages

### Unused Dependencies
Many packages are installed but not imported anywhere. Consider removing:
- `@headlessui/react`, `@heroicons/react` (using Radix UI + Lucide instead)
- `@react-three/drei`, `@react-three/fiber`, `three`, `three-globe`
- `@tsparticles/*` packages
- `bcrypt` (no auth implementation yet)
- `recharts`, `swiper`, `react-responsive-masonry`
- See PROJECT_ANALYSIS document for full list

## Development Workflow

### Adding New Pages
1. Create directory in `src/app/[page-name]/`
2. Add `page.tsx` file (default export React component)
3. Add `layout.tsx` if custom layout needed
4. Add metadata export for SEO
5. Import and use shadcn/ui components from `@/components/ui`

### Adding UI Components
```bash
# shadcn/ui components are already installed (60+ components available)
# Import from @/components/ui/[component-name]

# If adding a new shadcn component:
npx shadcn@latest add [component-name]
```

### Code Style
- **TypeScript:** Strict mode enabled - use proper typing
- **Naming:** PascalCase for components, camelCase for functions/variables
- **Imports:** Use `@/*` path aliases, not relative paths
- **Components:** Prefer client components (`"use client"`) when using hooks/interactivity
- **Formatting:** 2-space indentation (inferred from existing code)

### State Management
Currently using **local React state only** (useState, useReducer).

**When to add global state:**
- Authentication state across app
- User session management
- Shopping cart/quote management
- Real-time updates

**Recommended:** React Context for auth, consider Zustand/Jotai for complex state.

## Deployment

### GitHub Pages (Current Setup)
The project is configured for **static export to GitHub Pages**:

1. Push to `main` branch triggers GitHub Actions workflow
2. Workflow runs `npm run build` (creates `./out` directory)
3. Deploys static files to GitHub Pages
4. See `.github/workflows/deploy.yml` for workflow details
5. See `DEPLOYMENT_GUIDE.md` for complete deployment instructions

**Key Config:**
- `next.config.ts`: `output: 'export'`
- `basePath` set via `NEXT_PUBLIC_BASE_PATH` env variable
- Images set to `unoptimized: true`
- Trailing slash enabled

### Custom Domain
Follow instructions in `DEPLOYMENT_GUIDE.md` for GoDaddy DNS configuration with GitHub Pages.

## Known Issues & Workarounds

### Dashboard Pages Show Wrong Content
Both `buyer-dashboard` and `dealer-dashboard` currently display contact page content instead of actual dashboard functionality. This is **P0 issue** - dashboards are non-functional.

**Workaround:** Treat these as placeholders until authentication and backend are implemented.

### No Environment Variables
No `.env` file or environment variable validation exists. Hardcoded values include:
- Supabase URL: `slelguoygbfzlpylpxfs.supabase.co`
- Contact email: `hivekaro.india@gmail.com`
- Contact phone: `+91 7389937401`

**Recommendation:** Create `.env.example` and implement env var validation with Zod.

### Duplicate Code
Contact information is repeated across multiple page files. Consolidate into `src/lib/constants.ts`.

### Performance Optimization Opportunities
- Add dynamic imports for heavy components
- Implement React.memo for Navigation/Footer
- Add loading skeletons to prevent layout shift
- Code-split dashboard pages (when implemented)
- Optimize external images with Next.js Image component

## Future Implementation Priorities

Based on PROJECT_ANALYSIS_HiveKaro_2025-01-27.md:

### Phase 1 - Critical (Weeks 1-2)
1. Implement authentication with Better-Auth
2. Create actual dashboard functionality (buyer/dealer)
3. Enable build safety checks (fix TS/ESLint errors)
4. Fix security vulnerabilities
5. Implement database schema with Drizzle ORM

### Phase 2 - High Priority (Weeks 3-4)
1. Create API architecture (may require moving away from static export)
2. Add error boundaries
3. Implement environment variable management
4. Remove unused dependencies
5. Add form validation with React Hook Form + Zod

### Phase 3 - Improvements (Month 2)
1. Performance optimizations (code splitting, memoization)
2. Testing infrastructure (Vitest, React Testing Library, Playwright)
3. Comprehensive documentation
4. SEO metadata on all pages

## Additional Resources

- **Project Analysis:** See `PROJECT_ANALYSIS_HiveKaro_2025-01-27.md` for comprehensive codebase audit
- **Deployment Guide:** See `DEPLOYMENT_GUIDE.md` for GitHub Pages deployment instructions
- **shadcn/ui Docs:** https://ui.shadcn.com
- **Next.js 15 Docs:** https://nextjs.org/docs
- **Tailwind CSS v4:** https://tailwindcss.com

## Notes for AI Agents

- This is an **early-stage prototype** - many features are placeholders
- **Static export limitations:** No server-side API routes or SSR possible with current setup
- **Build safety disabled:** TypeScript and ESLint errors are ignored in builds
- **No tests exist:** Test infrastructure needs to be set up from scratch
- **Authentication not implemented:** Despite Better-Auth being installed
- **Database not connected:** Despite Drizzle ORM being installed
- **Follow shadcn/ui patterns:** All UI components use Radix UI + Tailwind conventions
- **Path aliases required:** Always use `@/*` imports, not relative paths
- **Client-side only:** All functionality must be client-side (static export)
