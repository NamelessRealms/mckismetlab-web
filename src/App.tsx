import React from "react";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Front from "./renderer/pages/front/Front";
import ModServer from "./renderer/pages/modServer/ModServer";
import Sponsor from "./renderer/pages/sponsor/Sponsor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/modServer" element={<ModServer />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
    </BrowserRouter>
  );
}
