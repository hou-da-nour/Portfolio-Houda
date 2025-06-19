// src/components/Container.jsx
import React from 'react';
export default function Container({ children }) {
  return (
    <div className="max-w-[1260px] mx-auto px-3 font-mono bg-[#10002B]">
      {children}
    </div>
  );
}
