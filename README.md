# Anthony Shifflett - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and projects. Built with React, TypeScript, and Vite, this site demonstrates best practices in web development, accessibility, and user experience design.

🔗 **Live Site:** [anthonyshifflett.github.io](https://anthonyshifflett.github.io)

## Features

### Pages
- **Home** - Professional introduction with quick navigation
- **About** - Career highlights, education, and certifications
- **Skills** - Interactive visualization of technical competencies
- **Resume** - Downloadable resume with detailed experience
- **Projects** - Portfolio of work with live demos and code links
- **Contact** - Contact form and professional links

### Technical Highlights
- ⚡️ Fast performance with code splitting and lazy loading
- 📱 Fully responsive design (mobile-first approach)
- ♿️ WCAG AA accessibility compliant
- 🎨 Modern UI with smooth animations and transitions
- 🔍 SEO optimized with meta tags and Open Graph support
- 🌙 Clean, maintainable codebase with TypeScript
- 🧪 Error boundaries for graceful error handling

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 (custom properties, Flexbox, Grid)
- **Routing:** React Router
- **Deployment:** GitHub Pages

## Key Features

### Accessibility
- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader optimized
- Focus management
- High contrast ratios

### Performance
- Code splitting for optimal load times
- Lazy loading of routes and components
- Image optimization
- Efficient bundle size
- Browser caching strategies

### Responsive Design
- Mobile-first CSS approach
- Fluid typography and spacing
- Custom breakpoints for all devices
- Touch-friendly interactions

## Project Structure
```
anthonyshifflett.github.io/
├── public/
│   ├── resume.pdf
│   ├── ads.png
│   ├── 404.html
│   └── CNAME
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── react.svg
│   ├── components/
│   │   ├── CertificationItem/
│   │   │   ├── CertificationItem.tsx
│   │   │   └── CertificationItem.css
│   │   ├── EducationItem/
│   │   │   ├── EducationItem.tsx
│   │   │   └── EducationItem.css
│   │   ├── ErrorBoundary/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ErrorBoundary.css
│   │   ├── ExperienceItem/
│   │   │   ├── ExperienceItem.tsx
│   │   │   └── ExperienceItem.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Loading/
│   │   │   ├── Loading.tsx
│   │   │   └── Loading.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.tsx
│   │   │   └── Navigation.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectCard.css
│   │   └── SkillCard/
│   │       ├── SkillCard.tsx
│   │       └── SkillCard.css
│   ├── pages/
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.css
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.css
│   │   ├── NotFound/
│   │   │   ├── NotFound.tsx
│   │   │   └── NotFound.css
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   └── Projects.css
│   │   ├── Resume/
│   │   │   ├── Resume.tsx
│   │   │   └── Resume.css
│   │   └── Skills/
│   │       ├── Skills.tsx
│   │       └── Skills.css
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```


## Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/anthonyshifflett/anthonyshifflett.github.io.git
cd anthonyshifflett.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run test suite |

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

## License

This project is open source and available under the MIT License.

## Contact

**Anthony Shifflett**
- Website: [anthonyshifflett.github.io](https://anthonyshifflett.github.io)
- GitHub: [@anthonyshifflett](https://github.com/anthonyshifflett)
