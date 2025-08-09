import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaUserCheck,
  FaBook,
} from "react-icons/fa";

const StudentLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FaChartBar />, end: true },
    { to: "/dashboard/schedule", label: "Schedule", icon: <FaCalendarAlt /> },
    { to: "/dashboard/exams", label: "Exams", icon: <FaChartBar /> },
    { to: "/dashboard/assignments", label: "Assignments", icon: <FaClipboardList /> },
    { to: "/dashboard/attendance", label: "Attendance", icon: <FaUserCheck /> },
    { to: "/dashboard/notes", label: "Notes", icon: <FaBook /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-20 top-0 left-0 h-full w-64 bg-white shadow-lg px-6 py-8 border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h2 className="text-xl font-bold text-blue-600">🎓 QA Student</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-gray-600" size={22} />
          </button>
        </div>

        {/* Title on desktop */}
        <h2 className="hidden md:block text-2xl font-bold text-blue-600 mb-10 text-center">
          🎓 QA Student
        </h2>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setIsOpen(false)} // close menu on mobile after click
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar on mobile */}
        <header className="md:hidden flex items-center justify-between bg-white p-4 shadow">
          <h1 className="text-lg font-semibold text-blue-600">Student Dashboard</h1>
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-gray-600" size={22} />
          </button>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
