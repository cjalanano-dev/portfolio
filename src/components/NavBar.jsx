import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md";
  const bg = scrolled
    ? "rgba(15, 23, 42, 0.8)" // surface 80%
    : "transparent";
  const borderColor = scrolled ? "rgba(31, 41, 55, 0.6)" : "transparent";

  return (
    <nav
      className={base}
      style={{
        backgroundColor: bg,
        borderBottom: `1px solid ${borderColor}`,
      }}
      aria-label="Primary Navigation"
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Go to home">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Carlos James <span style={{ color: "var(--accent)" }}>Alanano</span>
            </h1>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="transition-colors"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;