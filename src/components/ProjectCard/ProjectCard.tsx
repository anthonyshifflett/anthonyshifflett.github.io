import React from 'react';
import { ProjectCardProps } from '../../types';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <article className="project-card">
        <div className="project-image">
            <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} />
            <div className="project-links">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View source code for ${project.title} on GitHub`}
                    >
                        <Github size={24} aria-hidden="true" />
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View live site for ${project.title}`}
                    >
                        <ExternalLink size={24} aria-hidden="true" />
                    </a>
                )}
            </div>
        </div>
        <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-technologies" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                    <span key={tech} className="technology-tag">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </article>
);

export default ProjectCard;