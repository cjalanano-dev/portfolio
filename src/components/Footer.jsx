import React from 'react';

const Footer = () => (
    <footer style={{
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    }}>
        <div>
            &copy; {new Date().getFullYear()} Carlos James Alanano. All rights reserved.
        </div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            <a
                href="https://github.com/cjalanano-dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'underline', margin: '0 0.5rem' }}
            >
                GitHub
            </a>
            <a
                href="https://linkedin.com/in/cjalanano-dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'underline', margin: '0 0.5rem' }}
            >
                LinkedIn
            </a>
            <a
                href="mailto:cjalanano.dev@gmail.com"
                style={{ color: '#fff', textDecoration: 'underline', margin: '0 0.5rem' }}
            >
                Email
            </a>
        </div>
    </footer>
);

export default Footer;