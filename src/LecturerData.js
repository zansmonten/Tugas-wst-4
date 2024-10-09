// src/LecturerData.js
import React, { useState } from "react";
import "./App.css";

function LecturerData() {
  const [lecturers, setLecturers] = useState([
    { id: "D001", nama: "Dr. Ahmad", mataKuliah: "Algoritma" },
    { id: "D002", nama: "Prof. Siti", mataKuliah: "Jaringan Komputer" },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    mataKuliah: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedLecturers = [...lecturers];
      updatedLecturers[editIndex] = formData;
      setLecturers(updatedLecturers);
      setEditIndex(null);
    } else {
      setLecturers([...lecturers, formData]);
    }
    setFormData({ id: "", nama: "", mataKuliah: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(lecturers[index]);
  };

  const handleDelete = (index) => {
    const updatedLecturers = lecturers.filter((_, i) => i !== index);
    setLecturers(updatedLecturers);
  };

  return (
    <div className="lecturer-container">
      <h2>Data Dosen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID Dosen"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nama"
          placeholder="Nama Dosen"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mataKuliah"
          placeholder="Mata Kuliah"
          value={formData.mataKuliah}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <table className="lecturer-table">
        <thead>
          <tr>
            <th>ID Dosen</th>
            <th>Nama Dosen</th>
            <th>Mata Kuliah</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lecturer, index) => (
            <tr key={index}>
              <td>{lecturer.id}</td>
              <td>{lecturer.nama}</td>
              <td>{lecturer.mataKuliah}</td>
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

export default LecturerData;
