import React from "react";
import { TSkills } from "../constants/type";
import ProgressChart from "./ProgressChart";

type SkillSectionProps = {
  skills: TSkills[];
};

function SkillSection({ skills }: SkillSectionProps) {
  return (
    <div className="px-4 lg:px-14">
      <p className="text-primary text-lg mb-4">Skills</p>
      <div className="flex flex-wrap gap-4 md:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`w-full ${
              skills.length > 1 ? "md:w-[calc(50%-16px)]" : "md:w-full"
            } ${skills.length > 2 ? "lg:w-[calc(33.333%-22px)]" : "lg:w-full"}`}
          >
            <ProgressChart title={skill.title} skills={skill.skills} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
