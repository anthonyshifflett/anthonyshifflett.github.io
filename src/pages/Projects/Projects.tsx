import React from 'react';
import { Project } from '../../types';
import { Github, ExternalLink } from 'lucide-react';
import portfolio from '../../assets/images/portfolio.png';
import system from '../../assets/images/design-system.png';
import './Projects.css';

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern portfolio website built with React, TypeScript, and vanilla CSS. Features responsive design, clean architecture, and smooth animations.",
            technologies: ["React", "TypeScript", "CSS"],
            imageUrl: portfolio,
            githubUrl: "https://github.com/anthonyshifflett",
            liveUrl: "https://anthonyshifflett.com"
        },
        {
            id: 2,
            title: "Design System Implementation",
            description: "Comprehensive design system that reduced UI inconsistencies by 40%. Built with React and TypeScript, featuring automated visual testing.",
            technologies: ["React", "Storybook", "Jest", "TypeScript"],
            imageUrl: system,
            githubUrl: "https://github.com/anthonyshifflett"
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects-page">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.imageUrl} alt={project.title} />
                                <div className="project-links">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            title="View Source Code"
                                        >
                                            <Github size={24} />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            title="View Live Site"
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="technology-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;