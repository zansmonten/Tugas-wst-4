// src/Home.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";
import Slideshow from "./Slideshow"; // Import slideshow

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="home-header">
      <h1>My Website</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

function Navbar() {
  return (
    <nav className="home-navbar">
      <ul>
        <li>
          <Link to="/rooms">Data Ruangan</Link>
        </li>
        <li>
          <Link to="/students">Data Mahasiswa</Link>
        </li>
        <li>
          <Link to="/lecturers">Data Dosen</Link>
        </li>
        <li>
          <Link to="/courses">Data Mata Kuliah</Link>
        </li>
        <li>
          <Link to="/schedules">Data Jadwal</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-container">
        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
