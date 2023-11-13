import React from "react";
import { FaHome, FaUser } from "react-icons/fa"; // Menggunakan ikon rumah dan orang dari React Icons
import "./index.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/"><FaHome /> List Movie</a></li>
        <li><a href="/profile"><FaUser /> Profile</a></li>
      </ul>
    </nav>
  );
}
