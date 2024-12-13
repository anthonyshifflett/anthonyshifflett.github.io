import React from 'react';
import { EducationItemProps } from '../../types';
import './EducationItem.css';

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
    <div className="education-item">
        <h4>{education.school}</h4>
        <p>{education.degree}</p>
    </div>
);

export default EducationItem;