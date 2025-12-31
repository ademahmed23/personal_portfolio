import HeroSection from "./hero/page";
import AboutSection from "./about/page";
import ContactSection from "./contact/page";
import RoleAndSkills from "./skills/page";
import CertificationSection from "./Certification/page";
import MainProjects from "./MainProjects/page";
import RealWorldExperiences from "./experiences/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <HeroSection />
      <AboutSection />
      <CertificationSection/>
      <MainProjects/>
      <RealWorldExperiences/>
      <RoleAndSkills/>
      <ContactSection/>
    </main>
  );
}