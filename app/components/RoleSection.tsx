import { roles } from "../constants/roles";
import CounterCard from "./CounterCard";
const RoleSection = () => {
  return (
    <div className="w-full px-4 lg:px-10 pt-4">
      <p className="text-primary text-lg">Role</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg py-2">
        {roles.map((role, index) => (
          <CounterCard key={index} count={role} />
        ))}
      </div>
    </div>
  );
};

export default RoleSection;
