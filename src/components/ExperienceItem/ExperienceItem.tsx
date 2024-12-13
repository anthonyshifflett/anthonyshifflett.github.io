import React from 'react';
import { ExperienceItemProps } from '../../types';
import './ExperienceItem.css';

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => (
    <div className="experience-item">
        <div className="experience-header">
            <h4>{experience.title}</h4>
            <p className="company-info">
                {experience.company} | {experience.location} | {experience.period}
            </p>
        </div>
        <ul className="achievements-list">
            {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
            ))}
        </ul>
    </div>
);

export default ExperienceItem;