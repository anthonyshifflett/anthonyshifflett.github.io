import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Anthony Shifflett. All rights reserved.</p>
                    </div>
                    <div className="footer-social">
                        <a
                            href="https://github.com/anthonyshifflett"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/anthony-shifflett"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:anthonydshifflett+portfolio@gmail.com"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;