import { FaHome } from "react-icons/fa";
import { TWorkExperience } from "../constants/type";

interface RowExperienceProps {
  work: TWorkExperience["works"][0];
}

const RowExperience = ({ work }: RowExperienceProps) => {
  return (
    <div className="group relative text-white bg-background border-t-2 overflow-hidden border-white-500 hover:border-primary duration-600 mt-3">
      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 p-4 lg:p-6 relative z-10 space-y-3">
        {/* Grid Item 1: Icon and Position/Project Cost */}
        <div className="lg:col-span-1 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Icon */}
          <div className="min-w-16 min-h-16 flex items-center justify-center rounded-full border-2 border-white-500">
            <FaHome className="text-3xl" />
          </div>

          {/* Position and Project Cost */}
          <div className="text-center lg:text-left">
            <p className="text-2xl lg:text-3xl">{work.position}</p>
            <p className="text-white">{work.projectCost}</p>
          </div>
        </div>

        {/* Grid Item 2: Project and Client */}
        <div className="lg:col-span-1 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="lg:text-xl font-semibold">{work.project}</h3>
          <p className="text">{work.client}</p>
        </div>

        {/* Grid Item 3: Contractor and Consultant */}
        <div className="lg:col-span-1 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="lg:text-xl">{work.contractor}</p>
          <p className="text-white">{work.consultant}</p>
        </div>
      </div>
    </div>
  );
};

export default RowExperience;