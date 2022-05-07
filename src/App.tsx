import React from "react";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Front from "./renderer/pages/front/Front";
import Launcher from "./renderer/pages/launcher/Launcher";
import ModServer from "./renderer/pages/modServer/ModServer";
import Sponsor from "./renderer/pages/sponsor/Sponsor";
import Team from "./renderer/pages/team/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/modServer" element={<ModServer />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/launcher" element={<Launcher />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}
