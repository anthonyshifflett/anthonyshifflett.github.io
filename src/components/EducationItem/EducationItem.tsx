import React from 'react';
import { EducationItemProps } from '../../types';
import './EducationItem.css';

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
    <div className="education-item">
        <h3>{education.school}</h3>
        <p>{education.degree}</p>
    </div>
);

export default EducationItem;