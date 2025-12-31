"use client";
import { useEffect, useRef, useState } from "react";

interface CountProps {
  id: number;
  count: string;
  description: string;
}

const GlowCard = ({ count }: { count: CountProps }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentCount, setCurrentCount] = useState(0);

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

  // Count Animation
  useEffect(() => {
    let start = 0;
    const end = parseInt(count.count);
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(duration / end, 20);

    const timer = setInterval(() => {
      start += 1;
      setCurrentCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [count.count]);

  return (
    <div
      key={count.id}
      ref={cardRef}
      className="text-center p-0.5 rounded-2xl shadow-lg hover-card bg-secondary relative"
    >
      <div className="bg-secondary h-full rounded-2xl p-10 opacity-98">
        <h3 className="text-4xl font-bold text-white mb-4">{currentCount}+</h3>
        <p className="text-gray-300">{count.description}</p>
      </div>
    </div>
  );
};

export default GlowCard;
