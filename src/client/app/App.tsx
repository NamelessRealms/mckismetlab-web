import React from "react";
import "./App.scss";

export default function App() {

  const [name, setName] = React.useState<string>("Quasi");

  return (
    <div className="app">
        <h1>Hi {name} !</h1>
        <button onClick={() => setName(name => name === "Quasi" ? "Apex" : "Quasi")}>Toggle Name</button>
    </div>
  );
}
