import { section } from "../constants/sections";

interface SectionProps {
  sectionKey: keyof typeof section;
}

const SectionHeader = ({ sectionKey }: SectionProps) => {
  const { h2, content } = section[sectionKey];

  return (
    <div className="w-full py-4 mx-auto space-y-1 shadow-md">
      <h2 className="text-2xl lg:text-3xl text-center text-primary font-bold">{h2}</h2>
      <p className="text-base text-center lg:text-lg text-gray-400 whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default SectionHeader;