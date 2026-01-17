# AGENTS.md - AI Agent Context for Sriniketh J. Portfolio

## Project Overview

This is a personal portfolio website for **Sriniketh J.**, a Software Engineer specializing in Machine Learning, Networking, and Full Stack Development. Built with Next.js 15, TypeScript, and Tailwind CSS with a terminal/CLI aesthetic theme.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Icons**: Lucide React
- **Contact Form**: EmailJS (server action)
- **Theme**: Dark/Light mode with localStorage persistence
- **Deployment**: Docker support included

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Home/Landing page
│   ├── globals.css         # Theme colors & Tailwind config
│   ├── about/page.tsx      # About page with experience timeline
│   ├── blogs/page.tsx      # Searchable blog listing (50+ blogs)
│   ├── projects/page.tsx   # Project showcase
│   ├── contact/page.tsx    # Contact form with EmailJS
│   └── actions/
│       └── send-email.ts   # Server action for EmailJS
├── components/
│   ├── navigation.tsx      # Responsive navbar with mobile menu
│   ├── footer.tsx          # Site footer with social links
│   ├── command-palette.tsx # FZF-style command palette (Ctrl/Cmd+K)
│   └── theme-provider.tsx  # Dark/Light mode persistence
├── hooks/
│   └── use-hotkeys.ts      # Keyboard shortcut handler
├── lib/
│   └── data.ts             # Blog posts, projects, experience data
├── Dockerfile              # Production Docker build
└── .dockerignore
```

## Design System

### Color Palette (Red-based minimal theme)

| Token      | Light Mode | Dark Mode  | Usage                    |
|------------|------------|------------|--------------------------|
| background | #eeeeee    | #000000    | Page backgrounds         |
| foreground | #1a1a1a    | #f5f5f5    | Primary text             |
| primary    | #d84040    | #ff6b6b    | Buttons, links, accents  |
| muted      | #d4d4d4    | #1a1a1a    | Cards, subtle backgrounds|
| border     | #c4c4c4    | #333333    | Borders, dividers        |

### Typography

- **Headings**: JetBrains Mono (monospace) - Terminal aesthetic
- **Body**: System sans-serif
- **Code elements**: Monospace with `$` prompt styling

### Key UI Patterns

- Terminal-inspired headings: `$ whoami`, `$ cat blogs/`, `$ ls projects/`
- FZF-style command palette with bash prompt
- Typewriter effect on home page (type/delete loop)
- Red accents only - no other colors for highlights

## Key Features

### 1. Command Palette (Ctrl/Cmd+K)
- FZF-style terminal interface
- Keyboard navigation (↑↓ arrows + Enter)
- Search across pages and actions
- Toggle dark/light mode

### 2. Blog System
- 50+ technical blogs from multiple platforms
- Search by title
- Filter by publication (Analytics Vidhya, Medium, Hashnode, etc.)
- Tags displayed on cards

### 3. Theme Persistence
- Dark/Light mode toggle in navbar
- Saves preference to localStorage
- Respects system preference on first visit

### 4. Contact Form
- EmailJS integration via server action
- Environment variables: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Environment Variables

```env
# EmailJS (server-side)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id

# EmailJS (client-side)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Common Tasks

### Adding a new blog post
Edit `lib/data.ts` and add to the `blogPosts` array:
```typescript
{
  title: "Blog Title",
  publication: "Platform Name",
  tags: ["tag1", "tag2"],
  link: "https://..."
}
```

### Adding a new project
Edit `lib/data.ts` and add to the `projects` array:
```typescript
{
  name: "Project Name",
  description: "Description...",
  viewLink: "https://...",
  sourceLink: "https://github.com/..."
}
```

### Adding new experience
Edit `lib/data.ts` and add to the `experiences` array:
```typescript
{
  company: "Company Name",
  role: "Job Title",
  period: "Start - End",
  description: "What you did..."
}
```

## Styling Guidelines

1. **Use semantic tokens**: `bg-background`, `text-foreground`, `text-primary`
2. **Never hardcode colors**: Always use CSS variables via Tailwind
3. **Mobile-first**: Start with mobile styles, add `md:` breakpoints
4. **Monospace for terminal elements**: Use `font-mono` class
5. **Red accents only**: Primary color is the only accent

## Testing Locally

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Notes for AI Agents

- Always maintain the terminal/CLI aesthetic
- Keep the red-only color scheme
- Ensure mobile responsiveness on all changes
- Use Lucide React for any new icons
- Follow existing component patterns
- Data is centralized in `lib/data.ts`
