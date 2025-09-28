import { Link } from "react-router-dom";
import React from "react";
import { FaArrowRight, FaBriefcase, FaDatabase, FaCloud } from "react-icons/fa6";

const cardStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
};

const Home = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container-page">
        {/* Hero */}
        <div className="flex flex-col items-center text-center gap-5 sm:gap-6">
          <span className="text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
            CS Student · Developer · AI Enthusiast
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight tracking-tight-lg tracking-tighter-xl leading-tight" style={{ color: "var(--text)" }}>
            Building & Learning, <br /> One Project at a Time
          </h2>
          <p className="max-w-2xl text-base sm:text-lg" style={{ color: "var(--muted)" }}>
            Hi, I’m <span style={{ color: "var(--accent)" }}>Carlos James Alanano</span>. I design and develop scalable backend systems and mobile apps. I’m passionate about creating dependable solutions and continuously improving my skills in modern software engineering.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <Link
              to="/contact"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md border"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(34,211,238,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Contact Me
            </Link>
            <Link
              to="/projects"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md"
              style={{
                background: "var(--accent)",
                color: "#001015",
                boxShadow: "0 10px 25px -12px rgba(34,211,238,0.45)",
                transition: "transform 150ms ease, box-shadow 150ms ease, background-color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              View Projects
            </Link>
          </div>
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
            {["HTML", "CSS", "JavaScript", "Python", "Java", "Kotlin"].map((s) => (
              <span
                key={s}
                className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                style={{
                  background: "rgba(34, 211, 238, 0.08)",
                  color: "var(--accent)",
                  border: "1px solid rgba(34,211,238,0.25)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* About Me (short blurb + link) */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-4xl card-elevate" style={cardStyle}>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight accent-underline" style={{ color: "var(--text)" }}>About Me</h3>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                I’m a Computer Science student and backend developer passionate about building reliable systems and  mobile applications. I enjoy turning ideas into real-world solutions while constantly exploring ways to grow as a software engineer.
              </p>
              <div className="mt-5">
                <Link to="/about#intro" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border card-elevate" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                  Learn more <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Skills / Services snapshot */}
        <div className="mt-16 sm:mt-20">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {/* Skills */}
            <div className="card-elevate" style={cardStyle}>
              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="text-xl sm:text-2xl font-semibold accent-underline" style={{ color: "var(--text)" }}>Skills</h3>
                <div className="mt-4 grid gap-3">
                  {["Backend Development", "Mobile App Development", "Database Management", "Web Development"].map((s) => (
                    <div key={s} className="flex items-center gap-3 p-3 rounded-md border" style={{ borderColor: "var(--border)" }}>
                      <span style={{ width: 8, height: 8, borderRadius: 9999, background: "var(--accent)" }} />
                      <div className="font-medium" style={{ color: "var(--text)" }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Services */}
            <div className="card-elevate" style={cardStyle}>
              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="text-xl sm:text-2xl font-semibold accent-underline" style={{ color: "var(--text)" }}>Services</h3>
                <div className="mt-4 grid gap-3">
                  {[
                    { title: "Backend Development", desc: "Designing RESTful APIs & authentication" },
                    { title: "Mobile App Development", desc: "Building mobile applications with a focus on user experience and performance" },
                    { title: "Database Design & Management", desc: "Designing efficient database schemas and managing SQL databases for optimal performance" },
                  ].map((s) => (
                    <div key={s.title} className="flex items-start gap-3 p-3 rounded-md border" style={{ borderColor: "var(--border)" }}>
                      <div style={{ color: "var(--accent)" }}>{s.icon}</div>
                      <div>
                        <div className="font-medium" style={{ color: "var(--text)" }}>{s.title}</div>
                        <div className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects preview */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-end justify-between mb-4 sm:mb-5">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight accent-underline" style={{ color: "var(--text)" }}>Featured Projects</h3>
            <Link to="/projects" className="text-sm" style={{ color: "var(--accent)" }}>View all</Link>
          </div>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Blockchain Voting Simulator", desc: "An experimental web app simulating how a blockchain-based voting system could work.", tags: ["Blockchain", "JavaScript"] },
              { title: "F1 Lap Time Calculator", desc: "A simple F1 lap time calculator with factors like weather, fuel load, and tire compound.", tags: ["Python", "F1"] },
              { title: "Inside Style Web Design", desc: "A modern, responsive website made on Frontline Business Solutions, Inc. during my internship.", tags: ["HTML", "CSS"] },
            ].map((p) => (
              <Link key={p.title} to="/projects" className="block card-elevate" style={cardStyle}>
                <div className="p-4 sm:p-5">
                  <div className="text-lg sm:text-xl font-medium" style={{ color: "var(--text)" }}>{p.title}</div>
                  <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{p.desc}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(34, 211, 238, 0.08)", color: "var(--accent)", border: "1px solid rgba(34,211,238,0.25)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
