import React from "react";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Front from "./renderer/pages/front/Front";
import Mods from "./renderer/pages/mods/Mods";
import ModServer from "./renderer/pages/modServer/ModServer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/modServer" element={<ModServer />} />
      </Routes>
    </BrowserRouter>
  );
}
