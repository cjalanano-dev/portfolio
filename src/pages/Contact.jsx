import { Link } from "react-router-dom";
import React from "react";

const Contact = () => {
    return (
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight-lg tracking-tighter-xl" style={{ color: "var(--text)" }}>Contact Me</h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                        I’m open to opportunities, collaborations, or just a good tech chat. Let’s connect.
                    </p>
                    <div className="mt-7 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
                        <a
                            href="mailto:cjalanano.dev@gmail.com"
                            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md"
                            style={{ background: "var(--accent)", color: "#001015" }}
                        >
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cjalanano-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md border"
                            style={{ borderColor: "var(--border)", color: "var(--text)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
