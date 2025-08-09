import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DashboardCard = ({ icon, title, desc, link, color = "blue" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`border-l-4 border-${color}-500 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300`}
    >
      <Link to={link} className="block h-full">
        <div className="flex items-center gap-4">
          <div className={`text-4xl text-${color}-600`}>{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DashboardCard;
