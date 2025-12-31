"use client";
import { useEffect, useRef,  ReactNode, Children, isValidElement } from "react";

interface WrapCardProps {
  children: ReactNode; // Accepts a single child
}

const WrapCard = ({ children }: WrapCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Validate that only one child is passed
  const child = Children.only(children);

  // Ensure the child is a valid React element
  if (!isValidElement(child)) {
    throw new Error("WrapCard expects a single valid React element as a child.");
  }

  // Mouse move effect for glow
  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position relative to the card
        const y = e.clientY - rect.top; // Cursor Y position relative to the card
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="text-center p-0.5 rounded-2xl shadow-lg hover-card bg-background relative"
    >
      {child} 
    </div>
  );
};

export default WrapCard;