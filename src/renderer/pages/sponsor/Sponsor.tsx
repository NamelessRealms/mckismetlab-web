import React from "react";
import TopBar from "../../common/components/TopBar/TopBar";
import styles from "./Sponsor.scss";

import mcKismetLabTitleLog from "../../../assets/images/logo/mckismetlab-title.png";
import quasiImg from "../../../assets/images/figure/quasi.png";
import sponsorImg from "../../../assets/images/figure/sponsor.png";
import CardText from "../../common/components/cardText/CardText";
import Footer from "../../common/components/footer/Footer";

export default function Sponsor() {

    return (
        <div className={styles.sponsorDiv}>

            <TopBar />

            {/* block 01 */}
            <div className={styles.block01}>

                <div className={styles.centerDiv}>

                    <div className={styles.container}>

                        <div className={styles.leftDiv}>

                            <img src={mcKismetLabTitleLog} alt="mcKismetLab Logo" />
                            <h1 className={styles.label}>贊助我們</h1>
                            <p className={styles.description}>長期架設伺服器需要耗費大量時間與金錢，如果你願意提供贊助，我們非常的感謝你。</p>

                        </div>

                        <div className={styles.rightDiv}>

                            <img src={sponsorImg} alt="Sponsor" />

                        </div>

                    </div>

                </div>

                <div className={styles.bottomDiv}>
                    <h1 className={styles.label}>你的贊助，是我們長期架設伺服器的動力 !</h1>
                </div>

            </div>

            {/* block 02 */}
            <div className={styles.block02}>

                <div className={styles.container}>

                    <h1 className={styles.label}>贊助能獲得什麼福利？</h1>
                    <p className={styles.description}>嚴格來說你並不會有福利，我們希望你是有心想支持我們長期架設伺服器才贊助的，而不是為了快速取得某種東西、福利、功能而贊助我們，但我們還是會有小小的福利與功能給支持我們的玩家。</p>
                    <p className={styles.description}>看一下我們給你什麼小福利與功能。</p>

                    <div className={styles.welfaresDiv}>

                        <CardText
                            className={styles.cardText}
                            label="Discord 贊助者身分組"
                            description="讓大家知道你是贊助者"
                        />
                        <CardText
                            className={`${styles.cardTextCenter} ${styles.cardText}`}
                            label="永久白名單"
                            description="不用煩惱你不會被定期未達遊玩時數而失去白名單"
                        />
                        <CardText
                            className={styles.cardText}
                            label="代表你的支持"
                            description="Minecraft 聊天室會顯示你是贊助者"
                        />

                    </div>

                </div>

            </div>

            {/* block 03 */}
            <div className={styles.block03}>

                <div className={styles.container}>

                    <div className={styles.leftDiv}>

                        <h1 className={styles.label}>主要贊助管道</h1>

                    </div>

                    <div className={styles.rightDiv}>

                        <h1 className={styles.label}>海外贊助管道</h1>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}