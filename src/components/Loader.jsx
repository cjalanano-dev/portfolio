import React from 'react';

const Loader = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      role="status"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        background: 'rgba(11, 15, 25, 0.6)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 1000,
      }}
    >
      <div style={{ position: 'relative', width: 72, height: 72 }}>
        <div className="loader-ring" />
      </div>
      
    </div>
  );
};

export default Loader;
