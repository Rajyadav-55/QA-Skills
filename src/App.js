import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Student Pages
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/StudentDashboard";
import Schedule from "./pages/Schedule";
import Exams from "./pages/Exams";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import StudentNotes from "./pages/StudentNotes"; 

// Teacher Pages
import TeacherLayout from "./layouts/TeacherLayout";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherSchedule from "./pages/TeacherSchedule";
import TeacherExams from "./pages/TeacherExams";
import TeacherAssignments from "./pages/TeacherAssignments";
import TeacherAttendance from "./pages/TeacherAttendance";
import TeacherNotes from "./pages/TeacherNotes";


function App() {
  const userType = localStorage.getItem("userType"); // "student" or "teacher"

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {userType === "student" && (
          <Route path="/dashboard/*" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="exams" element={<Exams />} />
            <Route path="notes" element={<StudentNotes />} /> 
            <Route path="assignments" element={<Assignments />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>
        )}

        {userType === "teacher" && (
          <Route path="/dashboard/*" element={<TeacherLayout />}>
            <Route index element={<TeacherDashboard />} />
            <Route path="schedule" element={<TeacherSchedule />} />
            <Route path="exams" element={<TeacherExams />} />
            <Route path="notes" element={<TeacherNotes />} />
            <Route path="assignments" element={<TeacherAssignments />} />
            <Route path="attendance" element={<TeacherAttendance />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
