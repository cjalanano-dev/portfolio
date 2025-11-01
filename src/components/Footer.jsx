import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa6';

const linkBase = {
    color: "var(--muted)",
    textDecoration: "none",
    margin: "0 0.5rem",
    transition: "color 150ms ease",
};

const Footer = () => (
    <footer className="mt-16">
        {/* Gradient divider */}
        <div
            style={{
                height: 1,
                background:
                    'linear-gradient(90deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.55) 15%, rgba(34,211,238,0.35) 50%, rgba(34,211,238,0.55) 85%, rgba(34,211,238,0) 100%)',
                filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.35))',
            }}
        />

        <div className="container-page">
            <div className="py-8 sm:py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                {/* Brand + tagline */}
                <div className="text-center md:text-left md:flex-1">
                    <div className="text-lg font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                        Carlos James <span style={{ color: 'var(--accent)' }}>Alanano</span>
                    </div>
                    <div className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                        CS Student · Developer · AI Enthusiast
                    </div>
                </div>

                {/* Back to top button */}
                <div className="flex items-center justify-center md:flex-1">
                    <button
                        type="button"
                        aria-label="Back to top"
                        title="Back to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="rounded-full p-3 border card-elevate"
                        style={{
                            background: 'rgba(15,23,42,0.55)',
                            borderColor: 'var(--border)',
                            color: 'var(--text)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.boxShadow = '0 0 0 6px rgba(34,211,238,0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <FaArrowUp />
                    </button>
                </div>

                {/* Socials glass group */}
                <div className="w-full md:flex-1 flex justify-center md:justify-end">
                    <div
                        className="rounded-full p-1 flex items-center gap-1"
                        style={{
                            background: 'rgba(15,23,42,0.55)',
                            border: '1px solid var(--border)',
                            boxShadow: '0 8px 28px rgba(0,0,0,0.25)'
                        }}
                    >
                        {[{
                            href: 'https://github.com/cjalanano-dev', label: 'GitHub', icon: <FaGithub />
                        }, {
                            href: 'https://linkedin.com/in/cjalanano-dev', label: 'LinkedIn', icon: <FaLinkedin />
                        }, {
                            href: 'mailto:cjalanano.dev@gmail.com', label: 'Email', icon: <FaEnvelope />
                        }].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                target={s.href.startsWith('http') ? '_blank' : undefined}
                                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="footer-link"
                                style={{
                                    ...linkBase,
                                    margin: 0,
                                    padding: '8px 10px',
                                    borderRadius: 9999,
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,211,238,0.08)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                                <span className="footer-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    {s.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="pb-8 text-center text-xs" style={{ color: 'var(--muted)' }}>
                &copy; {new Date().getFullYear()} Carlos James Alanano. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;