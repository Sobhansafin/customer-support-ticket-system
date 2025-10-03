import React from "react";

export default function Navbar() {
  return (
    <header className=" navbar bg-white shadow-sm mb-6 w-full ">
      <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
        <div className="text-lg font-bold">
          <h3 className="text-green-600 font-bold text-2xl">CS — Ticket System</h3>
          </div>
        <nav className="flex gap-4 items-center text-[17px] font-semibold text-green-800">
          <a className="md:inline" href="#">Home</a>
          <a className="md:inline" href="#">FAQ</a>
          <a className="md:inline" href="#">Changelog</a>
          <a className="md:inline" href="#">Blog</a>
          <a className="md:inline" href="#">Download</a>
          <button className="btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[17px] font-semibold">+ New Ticket</button>
        </nav>
      </div>
    </header>
  );
}

