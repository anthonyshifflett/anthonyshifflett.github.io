import React from 'react';
import { Project } from '../../types';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import portfolio from '../../assets/images/portfolio.png';
import system from '../../assets/images/design-system.png';
import './Projects.css';

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern portfolio website built with React, TypeScript, and vanilla CSS. Features responsive design, clean architecture, and smooth animations.",
            technologies: ["React", "TypeScript", "CSS", "Vite"],
            imageUrl: portfolio,
            githubUrl: "https://github.com/anthonyshifflett?tab=projects",
            liveUrl: "https://anthonyshifflett.com"
        },
        {
            id: 2,
            title: "Design System Implementation",
            description: "Comprehensive design system that reduced UI inconsistencies by 40%. Built with React and TypeScript, featuring automated visual testing.",
            technologies: ["React", "TypeScript", "Storybook", "Chromatic", "Jest", "Style Dictionary", "React Aria", "Atomic Design"],
            imageUrl: system,
            githubUrl: "https://github.com/anthonyshifflett?tab=projects"
        }
    ];

    return (
        <div className="projects-page">
            <div className="section-container">
                <h1 className="section-title">Projects</h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="projects-coming-soon">
                    <span className="coming-soon-badge"><span aria-hidden="true">🚧</span> In Progress</span>
                    <p>
                        I'm actively working on more projects to feature here — check back soon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;