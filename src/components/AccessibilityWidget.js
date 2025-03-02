"use client";

import { useState } from "react";
import { useRef } from "react";
// Example icon from React Icons
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // We'll store the SpeechSynthesisUtterance in a ref so it persists
  // and can be canceled.
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
    // Prevent going too small (10px minimum)
    const newSize = Math.max(10, currentSize - 1);
    document.documentElement.style.fontSize = newSize + "px";
  };

  // 2. Color Contrast Toggle
  const handleContrastToggle = () => {
    // Toggles a class that applies high-contrast styles
    document.documentElement.classList.toggle("high-contrast");
  };

  
    // 3. Text-to-Speech (Start)
    const handleTextToSpeech = () => {
      // If something is already speaking, stop it first
      window.speechSynthesis.cancel();
  
      // Create a new utterance
      const newUtterance = new SpeechSynthesisUtterance(
        document.body.innerText || "No text to read."
      );
  
      // Optional: set voice or other properties here
      // newUtterance.voice = speechSynthesis.getVoices()[0];
      // newUtterance.rate = 1;
  
      // Store the utterance in a ref
      utteranceRef.current = newUtterance;
  
      // Update state
      setIsSpeaking(true);
  
      // When speech ends or is canceled
      newUtterance.onend = () => {
        setIsSpeaking(false);
      };
      newUtterance.onerror = () => {
        setIsSpeaking(false);
      };
  
      // Speak
      window.speechSynthesis.speak(newUtterance);
    };
  
    // 3b. Text-to-Speech (Stop)
    const handleStopSpeech = () => {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaUniversalAccess size={24} />
      </button>

      {open && (
        <div className="mt-2 bg-white border p-4 rounded shadow-lg w-48">
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
            Text-to-Speech
          </button>
        </div>
      )}
    </div>
  );
}
