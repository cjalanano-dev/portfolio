import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationDot, FaFileArrowDown, FaInstagram, FaFacebook } from "react-icons/fa6";

const mono = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
};

const Contact = () => {
    const email = "cjalanano.dev@gmail.com";
    const github = "https://github.com/cjalanano-dev";
    const linkedin = "https://linkedin.com/in/cjalanano-dev";
    const instagram = "https://instagram.com/mrztdsh";
    const facebook = "https://facebook.com/mrztdsh.dev"; 
    const resumeHref = "/";

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = (fd.get('name') || '').toString();
        const from = (fd.get('email') || '').toString();
        const message = (fd.get('message') || '').toString();
        const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`);
        const body = encodeURIComponent(`${message}\n\n—\nFrom: ${name || 'Anonymous'} <${from || 'no-email-provided'}>`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                <div
                    className="mx-auto max-w-2xl rounded-xl border card-elevate overflow-hidden"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                    {/* Header bar with window controls */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                        <span className="inline-block w-3 h-3 rounded-full" style={{ background: 'rgba(239,68,68,0.9)' }} />
                        <span className="inline-block w-3 h-3 rounded-full" style={{ background: 'rgba(234,179,8,0.9)' }} />
                        <span className="inline-block w-3 h-3 rounded-full" style={{ background: 'rgba(34,197,94,0.9)' }} />
                        <div className="ml-2 text-xs" style={{ color: 'var(--muted)', ...mono }}>
                            ~/contact — shell
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-6">
                        {/* Title */}
                        <div className="mb-4 sm:mb-5" style={mono}>
                            <div className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>
                                $ contact --info
                            </div>
                            <h1 className="mt-1 text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--text)' }}>
                                Let's Connect
                            </h1>
                        </div>

                        {/* Info pills */}
                        <div className="space-y-2 sm:space-y-2.5">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border" style={{ borderColor: 'var(--border)', background: 'rgba(15,23,42,0.55)', color: 'var(--muted)' }}>
                                <FaLocationDot /> <span>San Pablo, Laguna, PH</span>
                            </div>
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border"
                                style={{ borderColor: 'var(--border)', background: 'rgba(15,23,42,0.55)', color: 'var(--text)' }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                            >
                                <FaEnvelope /> <span>{email}</span>
                            </a>
                            <a
                                href={resumeHref}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border"
                                style={{ borderColor: 'var(--border)', background: 'rgba(15,23,42,0.55)', color: 'var(--text)' }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                download
                            >
                                <FaFileArrowDown /> <span>Download Resume</span>
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="mt-5" style={mono}>
                            <div className="text-xs sm:text-sm mb-2" style={{ color: 'var(--muted)' }}>
                                $ contact --social-links
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaGithub /> <span style={{ ...mono }}>GitHub</span>
                                </a>
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaLinkedin /> <span style={{ ...mono }}>LinkedIn</span>
                                </a>
                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaInstagram /> <span style={{ ...mono }}>Instagram</span>
                                </a>
                                <a
                                    href={facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaFacebook /> <span style={{ ...mono }}>Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact form */}
                        <form onSubmit={onSubmit} className="mt-6 sm:mt-7" noValidate>
                            <div style={mono} className="text-xs sm:text-sm mb-2" >
                                $ sendMessage
                            </div>
                            <div className="space-y-3 sm:space-y-3.5">
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>name:</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        className="w-full rounded-md px-3 py-2 border bg-transparent"
                                        style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>email:</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="w-full rounded-md px-3 py-2 border bg-transparent"
                                        style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>message:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full rounded-md px-3 py-2 border bg-transparent resize-y"
                                        style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 w-full px-4 py-2 rounded-md font-medium"
                                style={{ background: 'var(--accent)', color: '#001015' }}
                            >
                                sendMessage()
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
