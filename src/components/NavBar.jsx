import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const navItems = useMemo(() => ([
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ]), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight tracking-tight-lg tracking-tighter-xl" style={{ color: "var(--text)" }}>
              Carlos James <span style={{ color: "var(--accent)" }}>Alanano</span>
            </h1>
          </Link>

          {/* Desktop nav: glass group */}
          <div className="hidden md:flex items-center">
            <div
              className="rounded-full p-1 flex items-center gap-1"
              style={{
                background: "rgba(15,23,42,0.55)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
              }}
              role="menubar"
              aria-label="Primary"
            >
              {navItems.map((item) => {
                const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className="px-4 py-1.5 rounded-full text-sm transition-all"
                    style={{
                      color: isActive ? "var(--text)" : "var(--muted)",
                      border: `1px solid ${isActive ? "var(--accent)" : "transparent"}`,
                      background: isActive ? "rgba(34,211,238,0.08)" : "transparent",
                      boxShadow: isActive ? "0 0 0 6px rgba(34,211,238,0.08)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text)";
                        e.currentTarget.style.background = "rgba(148,163,184,0.08)";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--muted)";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 40,
              height: 40,
              color: 'var(--text)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="md:hidden animate-slide-fade-in"
          style={{
            background: 'rgba(15,23,42,0.85)',
            borderBottom: '1px solid var(--border)',
            borderTop: '1px solid var(--border)'
          }}
        >
          <div className="container-page">
            <ul className="py-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block w-full px-3 py-2 rounded-md border"
                    style={{
                      color: isActive ? 'var(--text)' : 'var(--muted)',
                      background: isActive ? 'rgba(34,211,238,0.08)' : 'transparent',
                      borderColor: isActive ? 'var(--accent)' : 'var(--border)'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );})}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;