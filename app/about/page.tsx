import CountSection from "../components/CountSection";
import ExperianceCard from "../components/ExperianceCard";
import GraduationSection from "../components/GraduationSection";
import SectionHeader from "../components/SectionHeader";


const AboutSection = () => {
  return (
    <section id="about" className="bg-background px-4">
      <SectionHeader sectionKey="about"/>
      <GraduationSection/>
      <div className="flex flex-col lg:flex-row items-top justify-center lg:justify-between h-full space-y-10 lg:space-y-0 py-4">
        <div className="lg:w-1/2 text-left lg:p-6 mt-8 lg:mt-0 rounded-lg backdrop-blur-sm">
          <ExperianceCard />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:p-6 items-center ">
          <CountSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
