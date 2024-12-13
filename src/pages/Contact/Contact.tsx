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
        e.preventDefault(); // Prevent default form submission behavior
        setIsSubmitting(true); // Indicate the form is being submitted

        try {
            // Send form data to Formspree to redirect to email
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
                {/* Left Column */}
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and development.</p>

                    <div className="contact-methods">
                        <a href="mailto:anthonydshifflett+portfolio@gmail.com" className="contact-method">
                            <Mail size={24} />
                            <div>
                                <h4>Email</h4>
                                <span>anthonydshifflett@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/anthony-shifflett" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <Linkedin size={24} />
                            <div>
                                <h4>LinkedIn</h4>
                                <span>Connect with me</span>
                            </div>
                        </a>

                        <a href="https://github.com/anthonyshifflett" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <Github size={24} />
                            <div>
                                <h4>GitHub</h4>
                                <span>View my projects</span>
                            </div>
                        </a>

                        <div className="contact-method">
                            <MapPin size={24} />
                            <div>
                                <h4>Location</h4>
                                <span>Boston, MA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="contact-right">
                    <h2 className="section-title">Get in Touch</h2>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;