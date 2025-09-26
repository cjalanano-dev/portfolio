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
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(t);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
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
