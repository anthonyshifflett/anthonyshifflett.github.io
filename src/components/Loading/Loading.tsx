import React from 'react';
import './Loading.css';

const Loading: React.FC = () => (
    <div className="loading-spinner" role="status" aria-label="Loading">
        <div className="spinner" aria-hidden="true"></div>
    </div>
);

export default Loading;