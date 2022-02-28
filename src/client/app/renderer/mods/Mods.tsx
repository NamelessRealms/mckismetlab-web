import React from "react";
import TopBar from "../common/components/TopBar/TopBar";
import ModsList from "./components/modsList/ModsList";
import "./Mods.scss";

export default function Mods() {

    return (
        <div className="modsDiv">
            
            <TopBar />
            <ModsList />

        </div>
    );
}