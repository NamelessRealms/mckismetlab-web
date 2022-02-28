import React from "react";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Mods from "./renderer/mods/Mods";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mods />} />
      </Routes>
    </BrowserRouter>
  );
}
