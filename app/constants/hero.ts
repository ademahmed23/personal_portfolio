import { THero } from "./type";
import profile from "../../public/images/profile.jpg";
import bg from "../../public/images/19389.jpg";

export const hero: THero[] = [
  {
    name: "Amanuel Daniel",
    skills: [
      "Full-Stack Development",
      "Real-time Systems",
      "Next.js & React",
      "Node.js & MongoDB",
      "Docker & Microservices",
      "Socket.IO & WebRTC",
    ],
    description:
      "Full-Stack Developer passionate about building fast, scalable web apps and real-time systems. Specialized in Next.js, Node.js, Docker, and microservices. Delivering clean, intuitive, and high-performance solutions.",
    profileImage: {
      src: profile,
      alt: "Amanuel Daniel",
    },
    backgroundImage: {
      src: bg,
      alt: "Full-Stack Development & Real-time Systems",
    },
  },
];
