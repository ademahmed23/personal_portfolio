// components/ExperienceSection.tsx
"use client";
import { TRealWorldExperience } from "../constants/type";
import RealWorldExperienceCard from "./RealWorldExp";

interface ExperienceSectionProps {
  experiences: TRealWorldExperience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-secondary transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((experience, index) => (
              <RealWorldExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
