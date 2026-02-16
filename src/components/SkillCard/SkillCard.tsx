import React from 'react';
import { SkillCardProps } from '../../types';
import './SkillCard.css';

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <div className="skill-card">
        <h3>{skill.name}</h3>
        <div
            className="skill-level"
            role="img"
            aria-label={`Skill level: ${skill.level} out of 5`}
        >
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className={`level-dot ${index < skill.level ? 'filled' : ''}`}
                    aria-hidden="true"
                />
            ))}
        </div>
    </div>
);

export default SkillCard;