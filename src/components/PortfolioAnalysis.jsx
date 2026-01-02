import React, { useState, useEffect } from 'react';
import { FaCalendarCheck, FaClock } from 'react-icons/fa6';

const PortfolioAnalysis = () => {
  const startDate = new Date('2025-09-25T00:00:00');
  const [uptime, setUptime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      if (diff > 0) {
        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30.44); // Approx month
        const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.44)) % 12);
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

        setUptime({ years, months, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
  };

  return (
    <div className="mt-16 sm:mt-20">
      <div className="text-center mb-8 sm:mb-10">
        <h4 className="text-sm sm:text-base font-semibold tracking-wide uppercase" style={{ color: "var(--accent)" }}>
          Portfolio's Information
        </h4>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {/* Creation Date Card */}
        <div className="card-elevate p-6 sm:p-8 flex flex-col items-center text-center" style={cardStyle}>
          <div className="mb-4 p-4 rounded-full" style={{ background: "rgba(34, 211, 238, 0.1)" }}>
            <FaCalendarCheck className="text-3xl sm:text-4xl" style={{ color: "var(--accent)" }} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>
            September 25, 2025
          </h3>
          <p className="text-sm sm:text-base max-w-xs" style={{ color: "var(--muted)" }}>
            The date this portfolio was created and first deployed.
          </p>
        </div>

        {/* Uptime Card */}
        <div className="card-elevate p-6 sm:p-8 flex flex-col items-center text-center" style={cardStyle}>
          <div className="mb-4 p-4 rounded-full" style={{ background: "rgba(34, 211, 238, 0.1)" }}>
            <FaClock className="text-3xl sm:text-4xl" style={{ color: "var(--accent)" }} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>
            Page Uptime
          </h3>
          <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {uptime.years} years, {uptime.months} months,<br />
            {uptime.days} days, {uptime.hours} hours,<br />
            {uptime.minutes} minutes, {uptime.seconds} seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalysis;
