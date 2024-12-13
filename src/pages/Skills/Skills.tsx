import React from 'react';
import { Skill } from '../../types';
import SkillCard from '../../components/SkillCard/SkillCard';
import './Skills.css';

const Skills: React.FC = () => {
    const skills: Skill[] = [
        // Development Skills
        { name: 'React.js', level: 5, category: 'development' },
        { name: 'TypeScript', level: 5, category: 'development' },
        { name: 'JavaScript', level: 5, category: 'development' },
        { name: 'HTML/CSS', level: 5, category: 'development' },
        { name: 'Next.js', level: 4, category: 'development' },
        { name: 'Vue.js', level: 4, category: 'development' },
        { name: 'Flutter', level: 4, category: 'development' },
        { name: 'Ruby on Rails', level: 4, category: 'development' },
        { name: 'Python', level: 4, category: 'development' },

        // Testing Skills
        { name: 'Test-Driven Development', level: 5, category: 'testing' },
        { name: 'Unit Testing', level: 5, category: 'testing' },
        { name: 'Functional Testing', level: 4, category: 'testing' },
        { name: 'Visual Testing', level: 5, category: 'testing' },
        { name: 'User Acceptance Testing', level: 4, category: 'testing' },

        // Tools
        { name: 'Git', level: 5, category: 'tools' },
        { name: 'Storybook', level: 5, category: 'tools' },
        { name: 'Jest', level: 5, category: 'tools' },
        { name: 'AWS', level: 4, category: 'tools' },
        { name: 'Azure DevOps', level: 4, category: 'tools' },
        { name: 'Webpack/Vite', level: 4, category: 'tools' },
        { name: 'Figma', level: 4, category: 'tools' },

        // AI/ML
        { name: 'OpenAI', level: 4, category: 'ai' },
        { name: 'Claude AI', level: 4, category: 'ai' },
        { name: 'Gemini', level: 3, category: 'ai' }
    ];

    const categories = {
        development: 'Development',
        testing: 'Testing',
        tools: 'Tools & Technologies',
        ai: 'AI/ML'
    };

    return (
        <div className="skills-page">
            <div className="section-container">
                <h2 className="section-title">Skills & Expertise</h2>

                {Object.entries(categories).map(([categoryKey, categoryName]) => (
                    <div key={categoryKey} className="skills-category">
                        <h3>{categoryName}</h3>
                        <div className="skills-grid">
                            {skills
                                .filter(skill => skill.category === categoryKey)
                                .map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;