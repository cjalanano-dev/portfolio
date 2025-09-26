import React from "react";

const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
};

const Projects = () => {
    const placeholder = [
        { title: "API Gateway", desc: "Reverse proxy with rate-limiting, auth, and observability." },
        { title: "Data Pipeline", desc: "Streaming ETL with fault tolerance and metrics." },
        { title: "Infra as Code", desc: "Reusable modules for secure cloud deployments." },
    ];

    return (
        <section className="py-16">
            <div className="container-page">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>My Projects</h2>
                    <p className="mt-3" style={{ color: "var(--muted)" }}>
                        Selected work that highlights system design, performance, and developer experience.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {placeholder.map((p) => (
                        <div key={p.title} className="p-5" style={cardStyle}>
                            <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>{p.title}</h3>
                            <p className="mt-2" style={{ color: "var(--muted)" }}>{p.desc}</p>
                            <button
                                className="mt-4 px-4 py-2 rounded-md"
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