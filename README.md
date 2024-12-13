# Personal Portfolio Website - CS601 Term Project

## Project Overview
This project serves as the final deliverable for CS601 Web Application Development. It demonstrates practical application of web development concepts, frameworks, and best practices learned throughout the course. The portfolio website aims to showcase professional experience while implementing core web technologies in a real-world application.

## Project Requirements Fulfilled

### Core Requirements
- 5-10 content pages implementing course material
- GitHub-hosted codebase with public access
- Portfolio focus with personal/professional content
- Implementation of majority of course concepts
- Clean, documented, and maintainable code
- Cross-browser and device compatibility
- Accessibility compliance

### Content Pages
1. **Home Page**
   - Professional introduction
   - Quick navigation to key sections
   - Call-to-action buttons for projects and contact

2. **About Page**
   - Professional biography
   - Career highlights
   - Educational background
   - Professional certifications

3. **Skills Page**
   - Technical skills visualization
   - Proficiency ratings
   - Categorized skill sets
   - Interactive skill displays

4. **Projects Page**
   - Portfolio of work
   - Project descriptions
   - Technology stacks used
   - Live demos and GitHub links

5. **Resume Page**
   - Professional experience
   - Educational background
   - Downloadable PDF version
   - Skills and certifications

6. **Contact Page**
   - Contact form
   - Professional social links
   - Location information
   - Direct email option

### Technical Implementation

#### Core Technologies
- **HTML5**
  - Semantic markup
  - Accessible structure
  - Meta tags for SEO
  - Open Graph protocol support

- **CSS3**
  - Custom properties for theming
  - Flexbox and Grid layouts
  - Responsive design
  - Mobile-first approach
  - Animations and transitions
  - Media queries for breakpoints

- **JavaScript/TypeScript**
  - ES6+ features
  - Type safety with TypeScript
  - Modular code structure
  - Error handling
  - Form validation
  - Async operations

- **React**
  - Functional components
  - React Hooks
  - Custom hooks
  - Context API
  - Route management
  - Code splitting
  - Lazy loading

#### Extra Credit Features
1. **TypeScript Integration**
   - Strong typing
   - Interface definitions
   - Type guards
   - Generic types
   - Utility types

2. **Responsive Design**
   - CSS Grid Layout
   - Flexbox
   - No framework dependencies
   - Custom breakpoints
   - Fluid typography

3. **Performance Optimization**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Cache management
   - Bundle size optimization

## Project Structure
```
src/
├── components/
│   ├── ErrorBoundary/
│   │   ├── ErrorBoundary.tsx
│   │   └── ErrorBoundary.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Loading/
│   │   ├── Loading.tsx
│   │   └── Loading.css
│   ├── Navigation/
│   │   ├── Navigation.tsx
│   │   └── Navigation.css
│   ├── ProjectCard/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectCard.css
│   ├── SkillCard/
│   │   ├── SkillCard.tsx
│   │   └── SkillCard.css
│   ├── ExperienceItem/
│   │   ├── ExperienceItem.tsx
│   │   └── ExperienceItem.css
│   └── EducationItem/
│       ├── EducationItem.tsx
│       └── EducationItem.css
├── pages/
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.css
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── NotFound/
│   │   ├── NotFound.tsx
│   │   └── NotFound.css
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   └── Projects.css
│   ├── Resume/
│   │   ├── Resume.tsx
│   │   └── Resume.css
│   └── Skills/
│       ├── Skills.tsx
│       └── Skills.css
├── styles/
│   ├── variables.css
│   └── global.css
├── types/
│   └── index.ts
├── App.tsx
├── App.css
├── main.tsx
└── vite-env.d.ts
```

## Setup and Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)
- Git

### Installation
1. Clone the repository
```bash
git clone https://github.com/anthonyshifflett/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Run tests
```bash
npm test
```

5. Build for production
```bash
npm run build
```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm test`: Run test suite
