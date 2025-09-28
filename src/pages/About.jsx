import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaWandMagicSparkles, FaArrowRight, FaArrowUp } from "react-icons/fa6";

const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
};

const About = () => {
    const { hash } = useLocation();
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Determine active tab based on URL hash for visual feedback (no default to Intro)
    const active = useMemo(() => (hash || ""), [hash]);

    useEffect(() => {
        // Show the back-to-top button only when near the bottom of the page
        const onScroll = () => {
            const el = document.documentElement;
            const reachedBottom = el.scrollTop + window.innerHeight >= el.scrollHeight - 120;
            setShowBackToTop(reachedBottom);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <>
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                {/* Top heading and quick in-page nav */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight-lg tracking-tighter-xl" style={{ color: "var(--text)" }}>
                        About Me
                    </h2>
                    <p className="mt-2.5 sm:mt-3 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                        A bit about my background, skills, experiences, and the services I offer.
                    </p>
                </div>

                {/* 1. Intro about me with photo */}
                <section id="intro" style={{ scrollMarginTop: "6rem" }} className="mt-10 sm:mt-12">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-5 sm:gap-6 md:grid-cols-5">
                            {/* Photo (top on mobile, right on desktop) */}
                            <div className="order-last md:order-last md:col-span-2">
                                <div className="relative rounded-xl overflow-hidden card-elevate border h-full" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                    <div aria-hidden="true" className="absolute inset-0" style={{
                                        background:
                                            'radial-gradient(800px 200px at 0% 0%, rgba(34,211,238,0.08), transparent 45%), radial-gradient(800px 200px at 100% 100%, rgba(34,211,238,0.06), transparent 50%), linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.55))',
                                        filter: 'drop-shadow(0 0 18px rgba(34,211,238,0.25))'
                                    }} />
                                    <div className="relative intro-photo w-full" style={{ minHeight: 280 }}>
                                        <img
                                            src={new URL('../assets/img/Face.jpg', import.meta.url).href}
                                            alt="Portrait of Carlos James Alanano"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            sizes="(min-width: 768px) 40vw, 80vw"
                                            style={{ zIndex: 1 }}
                                            decoding="async"
                                            onError={(e) => {
                                                const fallback = e.currentTarget.nextElementSibling;
                                                e.currentTarget.style.display = 'none';
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                            loading="lazy"
                                        />
                                        {/* Fallback placeholder if image missing */}
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', zIndex: 1 }}>
                                            <div className="rounded-lg p-4" style={{ background: 'rgba(15,23,42,0.55)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
                                                <span className="text-sm">Photo coming soon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Intro card */}
                            <div className="md:col-span-3">
                                <div className="card-elevate border rounded-xl h-full flex flex-col" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                    <div className="p-5 sm:p-6 md:p-8">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 text-xl" style={{ color: 'var(--accent)' }}><FaWandMagicSparkles /></div>
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight accent-underline" style={{ color: 'var(--text)' }}>Introduction</h3>
                                                <p className="mt-3 sm:mt-4 text-base sm:text-lg" style={{ color: 'var(--muted)' }}>
                                                    I’m Carlos James Alanano, a Computer Science student and backend developer passionate about building reliable, scalable systems. I specialize in backend and API development while exploring emerging technologies like blockchain and AI. Beyond coding, I’m driven by a passion for teaching, mentorship, and sharing knowledge with others. My long-term goal is to become a CS/IT professor, bridging the gap between theory and practical application.
                                                </p>
                                                <div className="mt-5 flex flex-wrap justify-start gap-3">
                                                    <Link to="/projects" className="px-4 py-2 rounded-md inline-flex items-center gap-2" style={{ background: 'var(--accent)', color: '#001015' }}>
                                                        Explore Projects <FaArrowRight />
                                                    </Link>
                                                    <Link to="/contact" className="px-4 py-2 rounded-md border" style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
                                                        Get In Touch
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Personal Education Information */}
                <section id="education" style={{ scrollMarginTop: "6rem" }} className="mt-10 sm:mt-12">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>Education</h3>
                        </div>
                        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                            {[{
                                degree: "TVL - IT in Mobile App and Web Development",
                                school: "STI College San Pablo",
                                period: "2023 – 2025",
                                summary: "Web development, Java and C# programming, databases, and foundational IT skills."
                            }, {
                                degree: "Bachelor of Science in Computer Science",
                                school: "Laguna State Polytechnic University",
                                period: "2025 - Present",
                                summary: "Core CS foundations, data structures, algorithms, and software engineering practices."
                            }].map((ed) => (
                                <div key={ed.degree} className="p-4 sm:p-5 card-elevate" style={cardStyle}>
                                    <h4 className="text-lg sm:text-xl font-medium" style={{ color: "var(--text)" }}>{ed.degree}</h4>
                                    <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{ed.school}{ed.period ? " · " + ed.period : ""}</div>
                                    <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{ed.summary}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2.5 Skills */}
                <section id="skills" style={{ scrollMarginTop: "6rem" }} className="mt-10 sm:mt-12">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight accent-underline" style={{ color: "var(--text)" }}>Skills</h3>
                        </div>
                        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                            {[
                                "Backend Development",
                                "CRUD Systems",
                                "Python",
                                "JavaScript / React",
                                "SQL / MySQL",
                                "Git / GitHub",
                                "HTML / CSS",
                                "Blockchain Basics",
                            ].map((s) => (
                                <div key={s} className="p-4 sm:p-5 card-elevate flex items-center gap-3" style={cardStyle}>
                                    <span style={{ width: 8, height: 8, borderRadius: 9999, background: "var(--accent)" }} />
                                    <div className="font-medium" style={{ color: "var(--text)" }}>{s}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Experiences */}
                <section id="experience" style={{ scrollMarginTop: "6rem" }} className="mt-10 sm:mt-12">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight accent-underline" style={{ color: "var(--text)" }}>Experiences</h3>
                        </div>
                        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
                            {[{
                                role: "Grade 11 Representative",
                                org: "Club of Programmers",
                                period: "2023 – 2024",
                                points: [
                                    "Collaborated with club officers for events and activities",
                                    "Helped organize club events within the organization",
                                    "Showcased leadership and teamwork skills"
                                ]
                            }, {
                                role: "Treasurer",
                                org: "Club of Programmers",
                                period: "2024 – 2025",
                                points: [
                                    "Managed club funds and budgeting",
                                    "Coordinated income-generating activities",
                                    "Ensured financial transparency"
                                ]
                            },{
                                role: "Senior High School Work Immersion/Intern",
                                org: "Frontline Business Solutions, Inc.",
                                period: "March - April, 2025",
                                points: [
                                    "Designed Website Mockups using Figma",
                                    "Developed Responsive Web Design",
                                    "Converted Mockups to HTML/CSS",
                                ]
                            },{
                                role: "Backend Team Lead",
                                org: "OCTA - Software Development and Application",
                                period: "Sept. 2025 - Present",
                                points: [
                                    "Leading backend development for web applications",
                                    "Designing RESTful APIs with Laravel",
                                    "Showcasing maturity and technical skills in a team setting"
                                ]
                            }].map((exp) => (
                                <div key={exp.role} className="p-4 sm:p-5 card-elevate" style={cardStyle}>
                                    <h4 className="text-lg sm:text-xl font-medium" style={{ color: "var(--text)" }}>{exp.role}</h4>
                                    <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{exp.org} · {exp.period}</div>
                                    <ul className="mt-2 list-disc pl-5 space-y-1">
                                        {exp.points.map((pt) => (
                                            <li key={pt} className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Services offered */}
                <section id="services" style={{ scrollMarginTop: "6rem" }} className="mt-10 sm:mt-12">
                    <div className="mx-auto max-w-5xl">
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 accent-underline" style={{ color: "var(--text)" }}>Services Offered</h3>
                        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "API & Backend Development", desc: "Designing RESTful APIs, authentication, and scalable services with Node.js/Laravel." },
                                { title: "Blockchain Development", desc: "Building prototypes that showcase blockchain concepts like voting systems, bridging backend engineering with Web3." },
                                { title: "CS/IT Mentorship", desc: "Teaching programming fundamentals, backend development, and modern tech concepts—helping students and peers grow their skills."},
                            ].map((s) => (
                                <div key={s.title} className="p-4 sm:p-5 flex items-start gap-3 card-elevate" style={cardStyle}>
                                    <div style={{ color: "var(--accent)", fontSize: 20 }}>{s.icon}</div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-medium" style={{ color: "var(--text)" }}>{s.title}</h4>
                                        <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        {/* Back to top button removed */}
        </>
    );
};

export default About;