import React from 'react';
import { ProjectCardProps } from '../../types';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="project-card">
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
);

export default ProjectCard;