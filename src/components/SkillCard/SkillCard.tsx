import React from 'react';
import { SkillCardProps } from '../../types';
import './SkillCard.css';

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <div className="skill-card">
        <h4>{skill.name}</h4>
        <div className="skill-level">
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className={`level-dot ${index < skill.level ? 'filled' : ''}`}
                    title={`Level ${skill.level} out of 5`}
                />
            ))}
        </div>
    </div>
);

export default SkillCard;