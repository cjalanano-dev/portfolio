import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="flex flex-col items-center text-center gap-5 sm:gap-6">
          <span className="text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
            CS Student · Developer · Innovator
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight tracking-tight-lg tracking-tighter-xl leading-tight" style={{ color: "var(--text)" }}>
            Building & Learning,
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight tracking-tight-lg tracking-tighter-xl leading-tight" style={{ color: "var(--text)" }}>
            One Project at a Time
          </h2>
          <p className="max-w-2xl text-base sm:text-lg" style={{ color: "var(--muted)" }}>
            Hi, I’m <span style={{ color: "var(--accent)" }}>Carlos James Alanano</span>. I develop web applications, dive into Blockchain and AI, and enjoy creating solutions that help others understand technology better.
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
            <a
              href="/cv/Carlos-James-Alanano-CV.pdf"
              download
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
              Download CV
            </a>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
            {["HTML", "CSS", "JavaScript", "Python", "Java", "C#"].map((s) => (
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
      </div>
    </section>
  );
};

export default Home;
