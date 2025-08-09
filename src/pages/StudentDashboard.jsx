import DashboardCard from "../components/student/DashboardCard";

const StudentDashboard = () => {
  const studentName = "Raj"; // Later you can fetch from API or context

  const cards = [
    {
      icon: "📅",
      title: "Schedule",
      desc: "View your class schedule and upcoming sessions.",
      link: "/dashboard/schedule",
      color: "indigo",
    },
    {
      icon: "📊",
      title: "Exam Performance",
      desc: "Check your exam scores and progress over time.",
      link: "/dashboard/exams",
      color: "green",
    },
    {
      icon: "📂",
      title: "Assignments",
      desc: "Track pending and submitted assignments.",
      link: "/dashboard/assignments",
      color: "purple",
    },
    {
      icon: "📋",
      title: "Attendance",
      desc: "Monitor your attendance record easily.",
      link: "/dashboard/attendance",
      color: "orange",
    },
    {
      icon: "📘",
      title: "Study Notes",
      desc: "Access uploaded notes and question papers.",
      link: "/dashboard/notes",
      color: "blue",
    },
  ];

  return (
    <section className="px-3 sm:px-4 md:px-6 py-6 min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Welcome Banner */}
        <div className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Welcome back, <span className="text-blue-600">{studentName}</span> 👋
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Here's a quick overview of your learning progress.
            </p>
          </div>
          <div className="text-4xl sm:text-5xl">🎓</div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="transition transform hover:scale-105 hover:shadow-lg"
            >
              <DashboardCard {...card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentDashboard;
