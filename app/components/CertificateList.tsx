import { GiTiedScroll } from "react-icons/gi";
interface CertificateProps {
  certificate: string;
}

const CertificateList = ({ certificate }: CertificateProps) => {
  return (
    <div className="bg-secondary space-y-6 flex flex-col justify-center items-center p-6 h-full shadow-lg rounded-2xl">
      <GiTiedScroll size={40} color="primary" className="text-primary" />
      <h3 className="text-1xl text-center font-bold text-gray-300">{certificate}</h3>
    </div>
  );
};

export default CertificateList;
