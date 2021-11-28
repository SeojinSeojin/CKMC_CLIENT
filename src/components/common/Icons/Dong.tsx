import React from 'react';

function DongIcon({ theme }: { theme: 'white' | 'blue' }) {
  return (
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill={theme === 'white' ? 'white' : '#2454a6'} />
    </svg>
  );
}

export default DongIcon;
