import React from "react";
import SectionHeader from "../components/SectionHeader";
import { realExperiences } from "../constants/world_experience";
import ExperienceSection from "../components/ExperienceSection";

function RealWorldExperiences() {
  return (
    <section id="experience" className="py-6 px-4 bg-background">
      <SectionHeader sectionKey="experience" />
      <ExperienceSection experiences={realExperiences} />
    </section>
  );
}

export default RealWorldExperiences;
