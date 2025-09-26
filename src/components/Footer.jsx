import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

const linkBase = {
    color: "var(--muted)",
    textDecoration: "none",
    margin: "0 0.5rem",
    transition: "color 150ms ease",
};

const Footer = () => (
    <footer
        style={{
            background: "var(--bg)",
            color: "var(--muted)",
            textAlign: "center",
            padding: "1rem 0",
            borderTop: "1px solid var(--border)",
            width: "100%",
        }}
    >
        <div style={{ color: "var(--text)" }}>
            &copy; {new Date().getFullYear()} Carlos James Alanano. All rights reserved.
        </div>
        <div style={{ marginTop: "0.5rem", fontSize: "1.3rem" }}>
            <a
                href="https://github.com/cjalanano-dev"
                target="_blank"
                rel="noopener noreferrer"
                style={linkBase}
                className="footer-link"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
                <span className="footer-icon" style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>
                  <FaGithub />
                </span>
                <span className="footer-label"></span>
            </a>
            <a
                href="https://linkedin.com/in/cjalanano-dev"
                target="_blank"
                rel="noopener noreferrer"
                style={linkBase}
                className="footer-link"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
                <span className="footer-icon" style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>
                  <FaLinkedin />
                </span>
                <span className="footer-label"></span>
            </a>
            <a
                href="mailto:cjalanano.dev@gmail.com"
                style={linkBase}
                className="footer-link"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
                <span className="footer-icon" style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>
                  <FaEnvelope />
                </span>
                <span className="footer-label"></span>
            </a>
        </div>
    </footer>
);

export default Footer;