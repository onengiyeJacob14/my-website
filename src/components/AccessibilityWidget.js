"use client";

import { useState } from 'react';

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button 
        onClick={() => setOpen(!open)}
        className="bg-purple-600 text-white p-3 rounded-full shadow-lg"
      >
        Accessibility
      </button>
      {open && (
        <div className="mt-2 bg-white border p-4 rounded shadow-lg">
          <p className="font-bold mb-2">Accessibility Options</p>
          <button className="block mb-2">Font Resizing</button>
          <button className="block mb-2">Color Contrast</button>
          <button className="block">Text-to-Speech</button>
        </div>
      )}
    </div>
  );
}
