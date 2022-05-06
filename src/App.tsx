import React from "react";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Front from "./renderer/pages/front/Front";
import Mods from "./renderer/pages/mods/Mods";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Mods />} /> */}
        <Route path="/" element={<Front />} />
      </Routes>
    </BrowserRouter>
  );
}
