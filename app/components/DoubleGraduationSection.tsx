"use client";
import { graduation } from "../constants/graduation";
import GraduationCard from "./GraduationCard";


const DoubleGraduationSection = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-4 lg:gap-6 p-2 rounded-lg shadow-md">
      {graduation.map((data, index) => (
        <GraduationCard key={index} data={data} />
      ))}
    </div>
  );
};

export default DoubleGraduationSection;
