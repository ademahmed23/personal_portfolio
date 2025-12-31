import SectionHeader from "../components/SectionHeader";
import WorkExperience from "../components/WorkExperience";
import { workExperiences } from "../constants/workExperiance";

const ExperienceSection = () => {
  return (
    <section className="container mx-auto px-4 py-2">
      <SectionHeader sectionKey="additional_works"/>
      <WorkExperience experiences={workExperiences} />
    </section>
  );
};

export default ExperienceSection;
