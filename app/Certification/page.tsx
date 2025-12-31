import React from "react";
import { certificates } from "../constants/certification";
import CertificateList from "../components/CertificateList";
import WrapCard from "../components/WrapCard";
import SectionHeader from "../components/SectionHeader";


function CertificationSection() {
  return (
    <section id="certification" className="bg-background px-4">
      <SectionHeader sectionKey="certifications"/>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
        {certificates.map((certificate, index) => (
          <WrapCard key={index}><CertificateList key={index} certificate={certificate.certificate} /></WrapCard>
        ))}
      </div>
    </section>
  );
}

export default CertificationSection;
