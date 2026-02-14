import React from 'react';
import { Experience, Education } from '../../types';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import EducationItem from '../../components/EducationItem/EducationItem';
import './Resume.css';

const Resume: React.FC = () => {
    const experiences: Experience[] = [
        {
            title: "Senior Frontend Engineer",
            company: "Avionte Staffing Software",
            location: "Remote",
            period: "Jan 2025 - Feb 2026",
            achievements: [
                "Architected and built a design system and component library, establishing a single source of truth for UI across the product suite and reducing cross-team implementation inconsistencies.",
                "Translated Figma designs into production-ready, reusable components including tab systems, date pickers, data tables, and search interfaces, integrated with Storybook and Chromatic for documentation and visual regression testing.",
                "Led WCAG accessibility compliance conversion of the careers application to meet AA standards, achieving full compliance and delivering the project ahead of schedule. Implemented semantic HTML, ARIA patterns, and automated testing with Axe and screen readers.",
                "Drove a Sass/SCSS architecture migration from legacy @import to modern @use/@forward patterns, reducing style conflicts and establishing scalable token-based theming across the codebase.",
                "Implemented advanced component patterns using ResizeObserver, MutationObserver, and responsive design techniques, eliminating layout shifts and improving cross-viewport rendering reliability.",
                "Partnered with Design/UX to define component APIs and contribution models, accelerating cross-team adoption and reducing design-to-development handoff friction."
            ]
        },
        {
            title: "Applications Developer & Frontend Engineer",
            company: "Buildertrend & CoConstruct (acquired)",
            location: "Remote",
            period: "Jan 2020 - Sept 2024",
            achievements: [
                "Led the development of a comprehensive design system, resulting in a 40% reduction in UI-related inconsistencies and improving overall product usability.",
                "Implemented and maintained a visual testing architecture, decreasing visual regressions by 80%, reducing manual testing time by 50%, and ensuring design fidelity across multiple platforms.",
                "Developed and maintained front-end pipelines, automating 60% of repetitive tasks and improving team efficiency.",
                "Collaborated with cross-functional teams, contributing 30% of time to product reviews and providing valuable feedback on UX/UI design."
            ]
        },
        {
            title: "Senior Frontend Software Engineer",
            company: "Teachstone",
            location: "Remote",
            period: "Mar 2014 - Jan 2020",
            achievements: [
                "Worked in an Agile/Scrum environment, consistently delivering high-quality code within sprint deadlines and contributing to a 20% increase in team velocity.",
                "Translated design mockups into code, ensuring 100% adherence to accessibility standards (WCAG 2.1) and improving user experience for individuals with disabilities.",
                "Conducted code reviews, identifying and resolving potential issues, leading to a 25% decrease in post-release bugs.",
                "Implemented unit and functional tests, achieving 85% code coverage, reducing integration issues in microservices architecture, and improving overall code reliability."
            ]
        }
    ];

    const education: Education[] = [
        {
            school: "Harvard University",
            degree: "Master of Liberal Arts in Extension Studies, Information Management Systems"
        },
        {
            school: "Regis University",
            degree: "Bachelor of Science in Computer Science"
        }
    ];

    const skills = {
        development: 'Design Systems, Component Libraries, ReactJS, VueJS, Angular, AngularJS, TypeScript, JavaScript, Next.js, React Aria, Redux, Flutter, Dart, Ruby on Rails, Python, HTML, CSS, RESTful APIs, Microservices',
        testing: 'Test-Driven Development (TDD), Unit Testing, Functional Testing, Regression Testing, User Acceptance Testing (UAT), Visual Testing',
        ai: 'Familiarity with AI principles and tools, such as OpenAI, Claude, Gemini, Antigravity, Windsurf, Cursor, etc.',
        tooling: 'Storybook, Chromatic, Style Dictionary, Jest, NX, Playwright, Cucumber, Selenium, Webpack, Vite, Framer, Figma, AWS, Azure DevOps, CircleCI, Cloud 66, Node.js, NPM, Git'
    };

    return (
        <div className="resume-page">
            <div className="section-container">
                <div className="resume-header">
                    <h2 className="section-title">Resume</h2>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
                        Download Resume (PDF)
                    </a>
                </div>

                <div className="resume-section">
                    <h3>Summary</h3>
                    <p>Results-driven Frontend Engineer with 10+ years of experience building design systems, component libraries, and accessible, production-grade interfaces. Expertise in React, Angular, TypeScript, Sass/SCSS, and Storybook, with a proven track record of translating Figma designs into scalable, reusable components. Passionate about developer experience, WCAG compliance, and bridging the gap between design and engineering.</p>
                </div>

                <div className="resume-section">
                    <h3>Skills</h3>
                    <div className="skills-content">
                        <div className="skill-group">
                            <h4>Software Development:</h4>
                            <p>{skills.development}</p>
                        </div>
                        <div className="skill-group">
                            <h4>Testing Methodologies:</h4>
                            <p>{skills.testing}</p>
                        </div>
                        <div className="skill-group">
                            <h4>AI/ML:</h4>
                            <p>{skills.ai}</p>
                        </div>
                        <div className="skill-group">
                            <h4>Tooling & Technologies:</h4>
                            <p>{skills.tooling}</p>
                        </div>
                    </div>
                </div>

                <div className="resume-section">
                    <h3>Professional Experience</h3>
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} experience={exp} />
                    ))}
                </div>

                <div className="resume-section">
                    <h3>Education</h3>
                    {education.map((edu, index) => (
                        <EducationItem key={index} education={edu} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;