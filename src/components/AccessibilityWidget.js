"use client";

import { useState, useRef } from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  // 1. Font Resizing
  const handleFontIncrease = () => {
    const currentSize =
      parseFloat(document.documentElement.style.fontSize) || 16;
    document.documentElement.style.fontSize = currentSize + 1 + "px";
  };

  const handleFontDecrease = () => {
    const currentSize =
      parseFloat(document.documentElement.style.fontSize) || 16;
    const newSize = Math.max(10, currentSize - 1);
    document.documentElement.style.fontSize = newSize + "px";
  };

  // 2. Color Contrast Toggle
  const handleContrastToggle = () => {
    document.documentElement.classList.toggle("high-contrast");
  };

  // 3. Text-to-Speech (Start)
  const handleTextToSpeech = () => {
    if (isSpeaking) {
      // If already speaking, act like a toggle and stop
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const newUtterance = new SpeechSynthesisUtterance(
      document.body.innerText || "No text to read."
    );

    utteranceRef.current = newUtterance;
    setIsSpeaking(true);

    newUtterance.onend = () => {
      setIsSpeaking(false);
    };
    newUtterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(newUtterance);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open accessibility options"
      >
        <FaUniversalAccess size={24} />
      </button>

      {open && (
        <div className="mt-2 bg-white border p-4 rounded shadow-lg w-48 text-sm">
          <p className="font-bold mb-2 text-gray-800">Accessibility</p>

          {/* Font Resizing */}
          <div className="flex justify-between mb-2">
            <button
              onClick={handleFontDecrease}
              className="bg-gray-200 px-2 py-1 rounded mr-2"
            >
              A-
            </button>
            <button
              onClick={handleFontIncrease}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              A+
            </button>
          </div>

          {/* Color Contrast */}
          <button
            onClick={handleContrastToggle}
            className="block w-full text-left bg-gray-200 px-2 py-1 rounded mb-2"
          >
            Toggle Contrast
          </button>

          {/* Text-to-Speech */}
          <button
            onClick={handleTextToSpeech}
            className="block w-full text-left bg-gray-200 px-2 py-1 rounded"
          >
            {isSpeaking ? "Stop Reading" : "Text-to-Speech"}
          </button>
        </div>
      )}
    </div>
  );
}
