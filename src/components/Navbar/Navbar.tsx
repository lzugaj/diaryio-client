import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between p-2 py-4 bg-gray-100 shadow-lg text-gray-500 hover:text-gray-700">
        <NavLink to="panel">My Diary</NavLink>
      </nav>
    </>
  );
}
