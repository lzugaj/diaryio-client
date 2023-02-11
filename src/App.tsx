import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NoteAddForm from "./pages/NoteAddForm/NoteAddForm";
import NoteDetails from "./pages/NoteDetails/NoteDetails";
import NoteUpdateForm from "./pages/NoteUpdateForm/NoteUpdateForm";
import UserPanel from "./pages/UserPanel/UserPanel";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <Routes>
          <Route path="/panel" element={<UserPanel />} />
          <Route path="/add-note" element={<NoteAddForm />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
          <Route path="/update-note/:id" element={<NoteUpdateForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
