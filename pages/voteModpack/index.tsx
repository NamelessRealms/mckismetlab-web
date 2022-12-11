import React from "react";
import styles from "./VoteModpack.module.scss";
import Head from "next/head";

import changeModpackHistory from "../../data/change_modpack_history.json";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/footer/Footer";
import ButtonFocus from "../../components/buttonFocus/ButtonFocus";

interface IModpackHistory {
    name: string;
    version: string;
    url: string;
}

const seasonNumber = 38;
const modpackName = "Nomifactory (GTCEu Port)";
const modpackUrl = "https://www.curseforge.com/minecraft/modpacks/nomi-ceu";
const modpackUrlImg = "https://media.forgecdn.net/avatars/511/500/637830283066849322.png";

export default function VoteModpack() {

    return (
        <div className={styles.voteModpackDiv}>

            <Head>
                <title>伺服器換包 | mcKismetLab</title>
            </Head>

            <TopBar />

            {/* block 01 */}
            <div className={styles.block01}>

                <div className={styles.centerDiv}>
                    <div className={styles.container}>

                        <h2 className={styles.seasonText}>{`第 ${seasonNumber} 季`}</h2>
                        <h1 className={styles.label}>現正遊玩中</h1>

                        <div className={styles.modpack} onClick={() => window.open(modpackUrl)}>
                            <img src={modpackUrlImg} alt="Modpack" />
                            <h1 className={styles.modpackLabel}>{modpackName}</h1>
                        </div>

                    </div>
                </div>

                <div className={styles.bottomDiv}>
                    <ButtonFocus className={styles.voteModpackButton} content="前往投票" disabled={false} onClick={() => window.open("https://forms.gle/tECwea72Qs5SNZeV8")} />
                </div>

            </div>

            {/* block 02 */}
            <div className={styles.block02}>
                <div className={styles.container}>
                    <h1 className={styles.label}>想先推薦下一季模組包? 沒問題。</h1>
                    <ButtonFocus className={styles.recommendModpackButton} content="前往推薦模組包" onClick={() => window.open("https://forms.gle/tnMgrh8JXGocTWsB8")} />
                </div>
            </div>

            {/* block 03 */}
            <div className={styles.block03}>

                <div className={styles.container}>

                    <h1 className={styles.label}>伺服器更換模組包歷史</h1>

                    <div className={styles.modpackList}>
                        {
                            changeModpackHistory.map((modpack: IModpackHistory) => (
                                <div className={styles.modpack} key={modpack.name}>
                                    <ButtonFocus className={styles.modpackButton} content={modpack.name} onClick={() => window.open(modpack.url)} />
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}