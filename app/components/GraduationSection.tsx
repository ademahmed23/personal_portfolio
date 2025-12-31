"use client";
import Image from "next/image";
import { graduation } from "../constants/graduation";
import { FaGraduationCap } from "react-icons/fa";
import { GiTiedScroll } from "react-icons/gi";

const data = graduation[0];

const GraduationSection = () => {
  const handleDownload = async () => {
    try {
      // First try the blob method
      const response = await fetch("/Amanuel_Daniel_Full_Stack_Resume.pdf", {
        cache: "no-store",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      // Verify blob size matches original
      console.log("Downloaded blob size:", blob.size);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Amanuel_Daniel_Full_Stack_Resume.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to direct download
      window.location.assign("/Amanuel_Daniel_Full_Stack_Resume.pdf");
    }
  };

  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-6 p-6 bg-primary2 rounded-lg shadow-md">
      {/* Left Section: Graduation Hat, Scroll Icon, and Year */}
      <div
        className="grid grid-col-1 lg:grid-cols-2 rounded-lg shadow-md lg:order-1 order-2"
        style={{
          background: "linear-gradient(135deg, #6EE7B7, #3B82F6)", // Gradient background
        }}
      >
        {/* Icons Section */}
        <div className="flex flex-col items-center justify-center pt-0 p-6">
          {/* Graduation Hat Icon */}
          <FaGraduationCap size={180} color="#FFFFFF" />
          {/* Scroll Icon */}
          <GiTiedScroll size={80} color="#FFFFFF" className="py-[-10px]" />
          {/* Headline */}
          <p className="mt-4 text-2xl font-bold text-white text-center">
            Graduation Achievements
          </p>
        </div>

        {/* Year and Download Button Section */}
        <div className="flex flex-col items-center justify-center space-y-8 p-6">
          {/* Year */}
          <p className="text-6xl font-bold text-white">{data.year}</p>
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* Right Section: University Logo, Name, and Department */}
      <div className="flex flex-col items-center justify-center order-1 lg:order-1 space-y-4 p-6">
        {/* University Logo */}
        <Image
          src={data.universityLogo}
          alt="University Logo"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-500"
        />
        {/* Name and Department */}
        <div className="text-center">
          <h2 className="lg:text-5xl text-2xl font-bold text-gray-800">
            {data.name}
          </h2>
          <p className="lg:text-3xl text-1xl font-bold text-gray-600 mt-2">
            {data.dept}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraduationSection;
