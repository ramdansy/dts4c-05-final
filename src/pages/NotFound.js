import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Ooopppsss... Halaman Tidak Ditemukan</h1>
      <Link to="/">Kembali Ke Home</Link>
    </div>
  );
}
