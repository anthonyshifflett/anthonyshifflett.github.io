import React, { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { ContactForm } from '../../types';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xyzyavqq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="contact-page">
            <div className="contact-layout">
                {/* Left Column — Contact Info */}
                <aside className="contact-info" aria-label="Contact information">
                    <h2>Let's Connect</h2>
                    <p>I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and development.</p>

                    <div className="contact-methods">
                        <a href="mailto:anthonydshifflett+portfolio@gmail.com" className="contact-method">
                            <Mail size={24} aria-hidden="true" />
                            <div>
                                <h3>Email</h3>
                                <span>anthonydshifflett@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/anthony-shifflett" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <Linkedin size={24} aria-hidden="true" />
                            <div>
                                <h3>LinkedIn</h3>
                                <span>Connect with me</span>
                            </div>
                        </a>

                        <a href="https://github.com/anthonyshifflett?tab=projects" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <Github size={24} aria-hidden="true" />
                            <div>
                                <h3>GitHub</h3>
                                <span>View my projects</span>
                            </div>
                        </a>

                        <div className="contact-method">
                            <MapPin size={24} aria-hidden="true" />
                            <div>
                                <h3>Location</h3>
                                <span>Boston, MA</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Column — Contact Form */}
                <div className="contact-right">
                    <h1 className="section-title">Get in Touch</h1>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form" noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            <div aria-live="polite" role="status">
                                {submitStatus === 'success' && (
                                    <div className="form-status success">
                                        Message sent successfully!
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="form-status error">
                                        There was an error sending your message. Please try again.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;