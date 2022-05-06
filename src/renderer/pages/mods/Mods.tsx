import React from "react";
import TopBar from "../../common/components/TopBar/TopBar";
import ModsList from "./components/modsList/ModsList";
import styles from "./Mods.scss";

export default function Mods() {

    return (
        <div className={styles.modsDiv}>
            
            <TopBar />
            <ModsList />

        </div>
    );
}