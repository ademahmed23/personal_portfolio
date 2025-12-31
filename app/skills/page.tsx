import RoleSection from "../components/RoleSection";
import SectionHeader from "../components/SectionHeader";
import SkillSection from "../components/SkillSection";
import { skills } from "../constants/skills";


const RoleAndSkills = () => {
  return (
    <section id="skills" className="bg-background px-4">
      <SectionHeader sectionKey="skills"/>
      <SkillSection skills={skills}/>
      <RoleSection />
    </section>
  );
};

export default RoleAndSkills;
