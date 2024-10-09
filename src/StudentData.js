// src/StudentData.js
import React, { useState } from "react";
import "./App.css";

function StudentData() {
  const [students, setStudents] = useState([
    { id: "M001", nama: "Ali", nim: "123456789" },
    { id: "M002", nama: "Budi", nim: "987654321" },
  ]);

  const [formData, setFormData] = useState({ id: "", nama: "", nim: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = formData;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, formData]);
    }
    setFormData({ id: "", nama: "", nim: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(students[index]);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="student-container">
      <h2>Data Mahasiswa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID Mahasiswa"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nama"
          placeholder="Nama Mahasiswa"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nim"
          placeholder="NIM"
          value={formData.nim}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID Mahasiswa</th>
            <th>Nama Mahasiswa</th>
            <th>NIM</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.nama}</td>
              <td>{student.nim}</td>
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

export default StudentData;
