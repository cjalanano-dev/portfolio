import { BrowserRouter as Router, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Loader from './components/Loader'

function AppShell() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const firstPaint = useRef(true);
  const prevLocation = useRef({ pathname: location.pathname, search: location.search, hash: location.hash });

  useEffect(() => {
    // Simulate a short initial loading to show the animation elegantly
    if (firstPaint.current) {
      const t = setTimeout(() => {
        setLoading(false);
        firstPaint.current = false;
      }, 700);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!firstPaint.current) {
      const pathOrSearchChanged =
        location.pathname !== prevLocation.current.pathname ||
        location.search !== prevLocation.current.search;

      if (pathOrSearchChanged) {
        setLoading(true);
        // Always scroll to top on real navigations
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        const t = setTimeout(() => setLoading(false), 400);
        return () => clearTimeout(t);
      } else {
        // Only hash changed (in-page anchor). Do not trigger loader.
        setLoading(false);
      }
    }
    // Update the previous location tracker after handling
    prevLocation.current = {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    };
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="background-canvas" aria-hidden="true"></div>
      <Loader visible={loading} />
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App
