// src/RoomData.js
import React, { useState } from "react";
import "./App.css";

function RoomData() {
  const [rooms, setRooms] = useState([
    { kode: "R001", nama: "Ruang Kuliah A", kapasitas: 30, gedung: "Gedung A" },
    { kode: "R002", nama: "Ruang Kuliah B", kapasitas: 25, gedung: "Gedung B" },
    { kode: "R003", nama: "Lab Komputer", kapasitas: 20, gedung: "Gedung C" },
    { kode: "R004", nama: "Ruang Seminar", kapasitas: 50, gedung: "Gedung D" },
  ]);

  const [formData, setFormData] = useState({
    kode: "",
    nama: "",
    kapasitas: "",
    gedung: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedRooms = [...rooms];
      updatedRooms[editIndex] = formData;
      setRooms(updatedRooms);
      setEditIndex(null);
    } else {
      setRooms([...rooms, formData]);
    }
    setFormData({ kode: "", nama: "", kapasitas: "", gedung: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(rooms[index]);
  };

  const handleDelete = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  return (
    <div className="room-container">
      <h2>Data Ruangan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="kode"
          placeholder="Kode Ruangan"
          value={formData.kode}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nama"
          placeholder="Nama Ruangan"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="kapasitas"
          placeholder="Kapasitas"
          value={formData.kapasitas}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gedung"
          placeholder="Gedung"
          value={formData.gedung}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <table className="room-table">
        <thead>
          <tr>
            <th>Kode Ruangan</th>
            <th>Nama Ruangan</th>
            <th>Kapasitas</th>
            <th>Gedung</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.kode}</td>
              <td>{room.nama}</td>
              <td>{room.kapasitas}</td>
              <td>{room.gedung}</td>
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

export default RoomData;
