# SR Mavericks School Website

A modern, responsive website for SR Mavericks International School built with React, TypeScript, and Vite.

## Overview

SR Mavericks School is a digital presence platform showcasing the school's programs, curriculum, admissions process, and facilities. The website provides an engaging user experience with information about pre-primary and primary education offerings.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Built with Shadcn UI and Radix UI
- **Smooth Animations**: Framer Motion for elegant transitions
- **Contact Integration**: WhatsApp integration for direct communication
- **Curriculum Showcase**: Detailed curriculum information and tabs
- **Gallery**: Photo gallery of school facilities and activities
- **Testimonials**: Student and parent testimonials
- **Form Validation**: React Hook Form with Zod validation

## Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **UI Components**: Shadcn UI (built on Radix UI)
- **Routing**: React Router
- **State Management**: React Query (@tanstack/react-query)
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest
- **Icons**: Lucide React
- **Notifications**: Sonner Toast
- **Linting**: ESLint

## Project Structure

```
src/
├── components/              # Reusable React components
│   ├── ui/                 # Shadcn UI components
│   ├── curriculum/         # Curriculum-related components
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── ContactForm.tsx     # Contact form
│   └── ...
├── pages/                   # Page components
│   ├── Home.tsx            # Home page
│   ├── About.tsx           # About page
│   ├── Admissions.tsx      # Admissions page
│   ├── Curriculum.tsx      # Curriculum page
│   ├── Gallery.tsx         # Photo gallery
│   ├── Contact.tsx         # Contact page
│   └── ...
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── utils/                   # Helper utilities
├── test/                    # Test files
├── App.tsx                  # Main app component
└── main.tsx                 # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Package manager (npm, yarn, or bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sr-mavericks-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run build:dev`** - Build for development
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run test`** - Run tests once
- **`npm run test:watch`** - Run tests in watch mode
- **`npm run deploy`** - Deploy to GitHub Pages

## Pages & Routes

- **Home** (`/`) - Landing page with hero, programs, curriculum, and testimonials
- **About** (`/about`) - School information and mission
- **Admissions** (`/admissions`) - Admissions process and requirements
- **Curriculum** (`/curriculum`) - Detailed curriculum information
- **Gallery** (`/gallery`) - Photo gallery of school activities
- **BeyondAcademics** (`/beyond-academics`) - Extra-curricular activities
- **Contact** (`/contact`) - Contact form and information

## Key Components

### UI Components
All components from Shadcn UI are available in `src/components/ui/`:
- Button, Card, Input, Textarea, Form, Dialog, Accordion, Tabs, and more

### Custom Components
- **Hero**: Eye-catching hero section with call-to-action
- **Navbar**: Navigation with responsive menu
- **ContactForm**: Form for inquiries and messages
- **CurriculumCards**: Display curriculum information
- **ProgrammeTabs**: Tabbed interface for programs
- **WhatsAppButton**: Quick WhatsApp contact button
- **CurriculumTabs**: Detailed curriculum tabs for different classes

## Configuration Files

- **`vite.config.ts`** - Vite configuration
- **`vitest.config.ts`** - Vitest testing configuration
- **`tailwind.config.ts`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript configuration
- **`postcss.config.js`** - PostCSS configuration for Tailwind
- **`eslint.config.js`** - ESLint rules and configuration

## Environment Variables

Create a `.env` file in the root directory if needed for:
- API endpoints
- Third-party service keys
- WhatsApp integration

## Development Guidelines

### Code Style
- Follow ESLint rules configured in the project
- Use TypeScript for type safety
- Component naming: PascalCase for React components
- File naming: Use appropriate casing (components: PascalCase, utilities: camelCase)

### Component Development
- Use Shadcn UI components for consistency
- Leverage Tailwind CSS for styling
- Implement responsive design with mobile-first approach
- Use Framer Motion for animations

### Forms
- Use React Hook Form for form management
- Add Zod validation schemas
- Display error messages appropriately

## Testing

Tests are located in `src/test/`:
- Run tests: `npm run test`
- Watch mode: `npm run test:watch`
- Configure additional tests as needed

## Deployment

### GitHub Pages
```bash
npm run deploy
```

### Build for Production
```bash
npm run build
# Creates optimized build in dist/ directory
```

## Contact & Support

For inquiries about the school:
- **Email**: Contact via the contact form on the website
- **WhatsApp**: Use the WhatsApp button for direct messaging
- **Website**: [SR Mavericks School](https://sr-mavericks-school.com)

## License

This project is proprietary and maintained by SR Mavericks International School.

## Contributing

For school staff working on this project:
1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make your changes and commit: `git commit -m "Add feature description"`
3. Push to branch: `git push origin feature/feature-name`
4. Submit a Pull Request

---

**Last Updated**: May 2026  
**Version**: 0.0.0 (Development)
