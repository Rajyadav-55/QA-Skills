import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChalkboardTeacher,
  FaClipboardList,
  FaCalendarAlt,
  FaUserCheck,
  FaFileUpload,
} from "react-icons/fa";

const TeacherLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", icon: <FaChalkboardTeacher />, label: "Dashboard" },
    { path: "/dashboard/schedule", icon: <FaCalendarAlt />, label: "Manage Schedule" },
    { path: "/dashboard/exams", icon: <FaClipboardList />, label: "Upload Exams" },
    { path: "/dashboard/assignments", icon: <FaClipboardList />, label: "Review Assignments" },
    { path: "/dashboard/attendance", icon: <FaUserCheck />, label: "Track Attendance" },
    { path: "/dashboard/notes", icon: <FaFileUpload />, label: "Upload Notes" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-700 text-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-purple-800 text-white shadow-lg transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="text-2xl font-bold text-center py-5 border-b border-purple-700">
          Teacher Panel
        </div>
        <nav className="flex flex-col mt-4 space-y-2 px-4">
          {menuItems.map(({ path, icon, label }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200
                 hover:bg-purple-700 hover:scale-105 ${
                   isActive ? "bg-purple-700 shadow-md" : ""
                 }`
              }
              onClick={() => setIsOpen(false)} // close menu on mobile after click
            >
              <span className="text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherLayout;
