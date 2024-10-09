// src/CourseData.js
import React, { useState } from "react";
import "./App.css";

function CourseData() {
  const [courses, setCourses] = useState([
    { id: "K001", nama: "Pemrograman Web", dosen: "Dr. Ahmad" },
    { id: "K002", nama: "Jaringan Komputer", dosen: "Prof. Siti" },
  ]);

  const [formData, setFormData] = useState({ id: "", nama: "", dosen: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editIndex] = formData;
      setCourses(updatedCourses);
      setEditIndex(null);
    } else {
      setCourses([...courses, formData]);
    }
    setFormData({ id: "", nama: "", dosen: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(courses[index]);
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div className="course-container">
      <h2>Data Mata Kuliah</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID Mata Kuliah"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nama"
          placeholder="Nama Mata Kuliah"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dosen"
          placeholder="Nama Dosen"
          value={formData.dosen}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <table className="course-table">
        <thead>
          <tr>
            <th>ID Mata Kuliah</th>
            <th>Nama Mata Kuliah</th>
            <th>Nama Dosen</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.id}</td>
              <td>{course.nama}</td>
              <td>{course.dosen}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseData;
