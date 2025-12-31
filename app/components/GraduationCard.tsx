"use client";
import Image, { StaticImageData } from "next/image";

interface GraduationData {
  universityLogo: StaticImageData;
  name: string;
  dept: string;
  year: string;
}

const GraduationCard = ({ data }: { data: GraduationData }) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 rounded-lg bg-primary2 shadow-md py-6">
      {/* Icons Section */}
      <div className="flex flex-col items-center space-y-4 justify-center pt-0 p-6 lg:col-span-2">
        {/* University Logo */}
        <Image
          src={data.universityLogo}
          alt="University Logo"
          width={200}
          height={200}
          className="rounded-full border-4 border-primary shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
        />
        {/* Name and Department */}
        <div className="text-center">
          <h2 className="lg:text-3xl text-2xl font-bold text-gray-800">
            {data.name}
          </h2>
          <p className="lg:text-2xl text-1xl font-bold text-gray-600 mt-2">
            {data.dept}
          </p>
        </div>
      </div>

      {/* Year and Download Button Section */}
      <div className="flex flex-col items-center justify-center space-y-8 p-6">
        {/* Year */}
        <p className="text-6xl font-bold text-primary">{data.year}</p>
        {/* Download Button */}
        <a
          href=""
          download={`${data.name}_Resume.pdf`}
          className="px-4 py-3 bg-white text-primary rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default GraduationCard;
