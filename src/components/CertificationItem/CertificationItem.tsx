import React from 'react';
import { CertificationItemProps } from '../../types';
import './CertificationItem.css';

const CertificationItem: React.FC<CertificationItemProps> = ({ certificationGroup }) => (
    <div className="certification-item">
        <div className="certification-header">
            <h3>{certificationGroup.issuer}</h3>
        </div>
        <ul className="certification-list">
            {certificationGroup.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default CertificationItem;
