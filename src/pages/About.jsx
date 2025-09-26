import { Link } from "react-router-dom";
import React from "react";

const About = () => {
    return (
        <section className="py-16">
            <div className="container-page">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>About Me</h2>
                    <p className="mt-6 text-lg" style={{ color: "var(--muted)" }}>
                        I am an aspiring Software Engineer and future IT/CS Professor, driven to share knowledge and build
                        impactful systems. I enjoy designing robust APIs, evolving architecture for scale, and mentoring others
                        through clean code practices and thoughtful documentation.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link to="/projects" className="px-5 py-2 rounded-md" style={{ background: "var(--accent)", color: "#001015" }}>
                            Explore Projects
                        </Link>
                        <Link to="/contact" className="px-5 py-2 rounded-md border" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;