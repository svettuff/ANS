import { useState } from 'react';
import Aurora from './Aurora';
import './index.css';

export default function App() {
    const [view, setView] = useState('home');

    return (
        <div className="app-container">
            <Aurora
                colorStops={["#ffffff", "#ffffff", "#ffffff"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />

            <div className="hero-content">
                {view === 'home' && (
                    <>
                        <h1 className="hero-title">
                            ANS — your partner<br />
                            in modern web development
                        </h1>
                        <div className="hero-buttons">
                            <button className="btn btn-primary" onClick={() => setView('contact')}>Contact Us</button>
                            <button className="btn btn-secondary" onClick={() => setView('learn')}>Learn More</button>
                        </div>
                    </>
                )}

                {view === 'contact' && (
                    <>
                        <div className="info-text">
                            <p><strong>Phone:</strong> +41 79 538 5017</p>
                            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/arkadii-nahoha-software" target="_blank">Company Profile</a></p>
                            <p><strong>Email:</strong> <a href="mailto:arkadiinahohasoftware@outlook.com">Send</a></p>
                        </div>
                        <div className="hero-buttons">
                            <button className="btn btn-secondary" onClick={() => setView('home')}>Back</button>
                        </div>
                    </>
                )}

                {view === 'learn' && (
                    <>
                        <div className="info-text">
                            <p><strong>We</strong> build full-cycle digital solutions and can also step in at any stage of your project when needed.</p>
                            <p><strong>Our team</strong> dives deep into your business specifics, target audience, and project goals. This allows us to craft intuitive and effective UI/UX designs that not only look great but deliver real value.</p>
                            <p><strong>We</strong> leverage cutting-edge technologies and approaches — from architecture to final animations — to ensure your product isn't just up to date, but ahead of the curve.</p>
                            <p>Based in Switzerland</p>
                        </div>
                        <div className="hero-buttons">
                            <button className="btn btn-secondary" onClick={() => setView('home')}>Back</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
