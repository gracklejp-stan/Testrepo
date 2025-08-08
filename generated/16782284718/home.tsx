import React from 'react';

export const HomePage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to the Custom Backstage Front Page</h1>

      <p>This is the first text block. You can put any message here.</p>

      {/* Green boxes container */}
      <div style={{ display: 'flex', gap: '1rem', margin: '2rem 0' }}>
        <div
          style={{
            backgroundColor: 'green',
            width: '100px',
            height: '100px',
            borderRadius: '8px',
          }}
        />
        <div
          style={{
            backgroundColor: 'green',
            width: '100px',
            height: '100px',
            borderRadius: '8px',
          }}
        />
      </div>

      <p>This is the second text block below the green boxes.</p>
    </div>
  );
};