// src/ScheduleData.js
import React, { useState } from "react";
import "./ScheduleData.css"; // Impor file CSS yang baru

function ScheduleData() {
  const [schedules, setSchedules] = useState([
    {
      id: "J001",
      mataKuliah: "Pemrograman Web",
      dosen: "Dr. Ahmad",
      hari: "Senin",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      ruang: "Ruang 101",
    },
    {
      id: "J002",
      mataKuliah: "Jaringan Komputer",
      dosen: "Prof. Siti",
      hari: "Selasa",
      jamMulai: "10:00",
      jamSelesai: "12:00",
      ruang: "Ruang 102",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    mataKuliah: "",
    dosen: "",
    hari: "",
    jamMulai: "",
    jamSelesai: "",
    ruang: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedSchedules = [...schedules];
      updatedSchedules[editIndex] = formData;
      setSchedules(updatedSchedules);
      setEditIndex(null);
    } else {
      setSchedules([...schedules, formData]);
    }
    setFormData({
      id: "",
      mataKuliah: "",
      dosen: "",
      hari: "",
      jamMulai: "",
      jamSelesai: "",
      ruang: "",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(schedules[index]);
  };

  const handleDelete = (index) => {
    const updatedSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(updatedSchedules);
  };

  return (
    <div className="schedule-container">
      <h2>Data Jadwal Kuliah</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID Jadwal"
          value={formData.id}
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
        <input
          type="text"
          name="dosen"
          placeholder="Nama Dosen"
          value={formData.dosen}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hari"
          placeholder="Hari"
          value={formData.hari}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="jamMulai"
          placeholder="Jam Mulai"
          value={formData.jamMulai}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="jamSelesai"
          placeholder="Jam Selesai"
          value={formData.jamSelesai}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ruang"
          placeholder="Ruang"
          value={formData.ruang}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>ID Jadwal</th>
            <th>Mata Kuliah</th>
            <th>Nama Dosen</th>
            <th>Hari</th>
            <th>Jam Mulai</th>
            <th>Jam Selesai</th>
            <th>Ruang</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.id}</td>
              <td>{schedule.mataKuliah}</td>
              <td>{schedule.dosen}</td>
              <td>{schedule.hari}</td>
              <td>{schedule.jamMulai}</td>
              <td>{schedule.jamSelesai}</td>
              <td>{schedule.ruang}</td>
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

export default ScheduleData;
