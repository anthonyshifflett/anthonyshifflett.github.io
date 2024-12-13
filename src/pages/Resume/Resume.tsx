import React from 'react';
import { Experience, Education } from '../../types';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import EducationItem from '../../components/EducationItem/EducationItem';
import './Resume.css';

const Resume: React.FC = () => {
    const experiences: Experience[] = [
        {
            title: "Applications Developer & Frontend Engineer",
            company: "Buildertrend & CoConstruct (acquired)",
            location: "Remote",
            period: "Jan 2020 - Present",
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
        development: 'ReactJS, React Aria, Redux, VueJS, Next.js, Flutter, Ruby on Rails, Python, TypeScript, JavaScript, HTML, CSS, RESTful APIs, Microservices, Design Systems',
        testing: 'Test-Driven Development (TDD), Unit Testing, Functional Testing, Regression Testing, User Acceptance Testing (UAT), Visual Testing',
        ai: 'Familiarity with AI principles and tools, such as OpenAI, ClaudeAI, Gemini, etc.',
        tooling: 'Storybook, Chromatic, Jest, NX, Playwright, Cucumber, Selenium, Webpack, Vite, Framer, Figma, AWS, Azure DevOps, CircleCI, Cloud 66, Node.js, NPM, Style Dictionary, Git'
    };

    return (
        <div className="resume-page">
            <div className="section-container">
                <div className="resume-header">
                    <h2 className="section-title">Resume</h2>
                    <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
                        Download Resume (PDF)
                    </a>
                </div>

                <div className="resume-section">
                    <h3>Summary</h3>
                    <p>Results-driven engineer with 10+ years of experience building and maintaining high-quality applications. Proven ability to translate designs into clean, responsive, and accessible code while ensuring robust quality assurance. Skilled in a variety of testing methodologies and passionate about delivering excellent user experiences. Strong understanding of AI principles and eager to apply my skills to ensure quality and functionality.</p>
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