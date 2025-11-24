import React from "react";
import { FaImage, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
    const projects = [
        {
            title: "Stampede",
            type: "console",
            brief: "A console-based chess engine made in C# for my final project in Fundamentals of Programming.",
            repo: "https://github.com/cjalanano-dev/Stampede",
        },
        {
            title: "Loom",
            type: "web",
            brief: "A website that helps students understand CS through a better curriculum and practical learning.",
            repo: "#",
        },
    ];

    return (
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                {/* Heading */}
                <div className="text-center">
                    <h2
                        className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight-lg tracking-tighter-xl"
                        style={{ color: "var(--text)" }}
                    >
                        My Projects
                    </h2>
                    <p className="mt-2.5 sm:mt-3 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                        A curated selection of work. <span></span>Hover to preview details.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <article
                            key={p.title}
                            tabIndex={0}
                            className="group relative rounded-xl overflow-hidden card-elevate border"
                            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                        >
                            {/* Image area with hover overlay */}
                            <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                                {p.image ? (
                                    <img
                                        src={p.image}
                                        alt={`${p.title} preview`}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        style={{ borderBottom: "1px solid var(--border)" }}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center"
                                        style={{
                                            background:
                                                "radial-gradient(1200px 300px at 0% 0%, rgba(34,211,238,0.08), transparent 40%), radial-gradient(1200px 300px at 100% 100%, rgba(34,211,238,0.06), transparent 45%), linear-gradient(180deg, rgba(2,6,23,0.4), rgba(2,6,23,0.55))",
                                            borderBottom: "1px solid var(--border)",
                                        }}
                                    >
                                        <div
                                            className="rounded-lg p-4"
                                            style={{
                                                background: "rgba(15,23,42,0.55)",
                                                border: "1px solid var(--border)",
                                                color: "var(--muted)",
                                            }}
                                        >
                                            <FaImage className="text-3xl sm:text-4xl" />
                                        </div>
                                    </div>
                                )}

                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: "rgba(2,6,23,0.65)",
                                        backdropFilter: "blur(6px)",
                                        WebkitBackdropFilter: "blur(6px)",
                                        borderBottom: "1px solid var(--border)",
                                    }}
                                >
                                    <div className="h-full w-full flex flex-col items-center justify-center gap-3 text-center px-4">
                                        <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "var(--text)" }}>
                                            {p.title}
                                        </h3>
                                        <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                                            {p.brief}
                                        </p>
                                        <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2.5">
                                            {p.type === "web" && p.live && (
                                                <a
                                                    href={p.live}
                                                    target={p.live.startsWith("http") ? "_blank" : undefined}
                                                    rel={p.live.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border"
                                                    style={{
                                                        background: "rgba(15,23,42,0.55)",
                                                        borderColor: "var(--border)",
                                                        color: "var(--text)",
                                                    }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                                                >
                                                    <FaArrowUpRightFromSquare />
                                                    <span>View Live</span>
                                                </a>
                                            )}

                                            {(p.type === "desktop" || p.type === "console" || p.type === "mobile") && p.repo && (
                                                <a
                                                    href={p.repo}
                                                    target={p.repo.startsWith("http") ? "_blank" : undefined}
                                                    rel={p.repo.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border"
                                                    style={{
                                                        background: "rgba(15,23,42,0.55)",
                                                        borderColor: "var(--border)",
                                                        color: "var(--text)",
                                                    }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                                                >
                                                    <FaGithub />
                                                    <span>View Repository</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card footer (title always visible, subtle) */}
                            <div className="p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                                            {p.title}
                                        </h3>
                                        <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                                            {p.type === "web" ? "Website" : p.type === "desktop" ? "Desktop App" : p.type === "console" ? "Console App" : "Mobile App"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;