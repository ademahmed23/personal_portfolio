"use client";
import { useEffect, useRef } from "react";
import { FaFileContract, FaServer, FaLaptopCode, FaCode,  FaBuilding, FaHome, FaCogs } from "react-icons/fa";

interface CountProps {
  role: string;
  icon: string;
  description: string;
}

const iconMapping: Record<string, React.ElementType> = {
  FaFileContract: FaFileContract,
  FaBuilding: FaBuilding,
  FaHome: FaHome,
  FaCogs: FaCogs,
  FaServer: FaServer,
  FaLaptopCode: FaLaptopCode,
  FaCode: FaCode,
};

const CounterCard = ({ count }: { count: CountProps }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

  const Icon = iconMapping[count.icon];

  return (
    <div className="">
      <div
        ref={cardRef}
        className="text-center p-6 rounded-2xl shadow-lg hover-glow bg-secondary"
      >
        <div className="flex justify-center items-center w-full p-2 mb-2 lg:mb-4 lg:p-4">
          {Icon && <Icon className="text-4xl lg:text-5xl text-primary" />}
        </div>
        <h3 className="text-xl lg:text-3xl font-bold text-white mb-2">
          {count.role}
        </h3>
        <p className="text-gray-300">{count.description}</p>
      </div>
    </div>
  );
};

export default CounterCard;
