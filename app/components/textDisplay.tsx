// textDisplay.tsx
"use client";
import { useEffect, useState } from "react";

interface TextDisplayProps {
  text: string;
}

const TextDisplay = ({ text }: TextDisplayProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // When the text changes, start the closing animation
    if (text !== displayText) {
      setIsClosing(true); // Start closing the current text

      // Wait for the closing animation to finish (0.5s), then update the text and start the opening animation
      setTimeout(() => {
        setDisplayText(text); // Update the text
        setIsClosing(false); // Start opening the new text
      }, 1000); // Match the duration of the closing animation
    }
  }, [text, displayText]);

  return (
    <div className="overflow-hidden inline-block max-w-full">
      <p
        className={`text-lg text-primary md:text-xl border-r-2 border-r-black break-words whitespace-pre-wrap ${
          isClosing ? "animate-close" : "animate-typing"
        }`}
      >
       {displayText}
      </p>
    </div>
    
  );
};

export default TextDisplay;