import React from 'react';
import photo from '../../assets/images/me.png';
import './About.css';

const About: React.FC = () => {
    const highlights = [
        {
            title: "Frontend Development",
            description: "Specializing in React and TypeScript, with 10+ years of experience building responsive web applications."
        },
        {
            title: "Quality Assurance",
            description: "Expertise in testing methodologies and maintaining high-quality code standards through comprehensive testing strategies."
        },
        {
            title: "UI/UX Design",
            description: "Google UX Design certified, focusing on creating intuitive and accessible user experiences."
        }
    ];

    return (
        <div className="about">
            <div className="section-container">
                <h1 className="section-title">Hello, I'm Anthony!</h1>
                <div className="about-intro-section">
                    <div className="about-image-container">
                        <img
                            src={photo}
                            alt="Anthony Shifflett"
                            className="about-image"
                        />
                    </div>

                    <div className="about-intro">
                        <p className="about-tagline">A results-driven engineer passionate about creating exceptional web experiences.</p>
                        <div className="about-description">
                            <p>With over 10 years of experience in software development,
                                I specialize in building and maintaining high-quality applications.
                                I excel at translating designs into clean, responsive, and accessible
                                code while ensuring robust quality assurance.
                            </p>
                            <p>I am excited to bring my technical expertise, quality
                                assurance focus, and user-centric approach to new challenges
                                and opportunities. Let's connect and discuss how I can contribute
                                to your organization's success!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-highlights">
                    <h2>Professional Highlights</h2>
                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="highlight-card">
                                <h3>{highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;