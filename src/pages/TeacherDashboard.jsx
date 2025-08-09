import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const teacherName = "Mr. Aayush"; // later fetch dynamically

  const cards = [
    {
      icon: "🗓️",
      title: "Manage Schedule",
      desc: "Create and edit class schedules.",
      link: "/dashboard/schedule",
    },
    {
      icon: "📝",
      title: "Upload Exams",
      desc: "Set and manage exams for students.",
      link: "/dashboard/exams",
    },
    {
      icon: "📚",
      title: "Review Assignments",
      desc: "Review and grade student assignments.",
      link: "/dashboard/assignments",
    },
    {
      icon: "✅",
      title: "Track Attendance",
      desc: "Mark and review class attendance.",
      link: "/dashboard/attendance",
    },
    {
      icon: "📄",
      title: "Upload Notes",
      desc: "Share study notes & question papers with students.",
      link: "/dashboard/notes",
    },
  ];

  return (
    <section className="px-3 sm:px-4 md:px-6 py-6 min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Welcome Banner */}
        <div className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Welcome back, <span className="text-purple-600">{teacherName}</span> 👋
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Here’s a quick view of your teaching tools.
            </p>
          </div>
          <div className="text-4xl sm:text-5xl">📖</div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
          {cards.map(({ icon, title, desc, link }) => (
            <Link
              to={link}
              key={title}
              className="bg-purple-100 hover:bg-purple-200 transition transform hover:scale-105 p-6 rounded-xl shadow-md border border-purple-200"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-lg font-semibold text-purple-800 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeacherDashboard;
