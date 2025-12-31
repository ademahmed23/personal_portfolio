import { TWorkExperience } from "../constants/type";
import RowExperience from "./RowExperiance";

interface WorkExperienceProps {
  experiences: TWorkExperience[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div key={index}>
          <h2 className="text-xl lg:text-3xl font-bold mb-4">
            {experience.title}
          </h2>
          <>
            {experience.works.map((work, workIndex) => (
              <RowExperience key={workIndex} work={work} />
            ))}
          </>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;