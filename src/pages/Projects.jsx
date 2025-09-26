import React from "react";

const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
};

const Projects = () => {
    const placeholder = [
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet." },
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet." },
        { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet." },
    ];

    return (
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight-lg tracking-tighter-xl" style={{ color: "var(--text)" }}>My Projects</h2>
                    <p className="mt-2.5 sm:mt-3 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                        Selected work that is coming soon.
                    </p>
                </div>

                <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {placeholder.map((p) => (
                        <div key={p.title} className="p-4 sm:p-5" style={cardStyle}>
                            <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>{p.title}</h3>
                            <p className="mt-1.5 sm:mt-2" style={{ color: "var(--muted)" }}>{p.desc}</p>
                            <button
                                className="mt-3 sm:mt-4 px-4 py-2 rounded-md"
                                style={{ border: "1px solid var(--border)", color: "var(--text)", background: "transparent" }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;