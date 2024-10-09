// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import RoomData from "./RoomData"; // Halaman Data Ruangan
import StudentData from "./StudentData"; // Halaman Data Mahasiswa
import LecturerData from "./LecturerData"; // Halaman Data Dosen
import CourseData from "./CourseData"; // Halaman Data Mata Kuliah
import ScheduleData from "./ScheduleData"; // Import halaman Data Jadwal Kuliah

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<RoomData />} />
        <Route path="/students" element={<StudentData />} />
        <Route path="/lecturers" element={<LecturerData />} />
        <Route path="/courses" element={<CourseData />} />
        <Route path="/schedules" element={<ScheduleData />} />{" "}
        {/* Tambah route untuk Data Jadwal Kuliah */}
      </Routes>
    </Router>
  );
}

export default App;
