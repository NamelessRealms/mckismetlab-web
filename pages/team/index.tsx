import React from "react";
import styles from "./Team.module.scss";
import Image from "next/image";

import liujuhsinImg from "../../assets/images/figure/liujuhsin.png";
import moonFlameImg from "../../assets/images/figure/Moon_Flame.png";
import quasiImg from "../../assets/images/figure/quasi.png";
import teamImg from "../../assets/images/figure/team.png";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/footer/Footer";

export default function Team() {

    return (
        <div className={styles.teamDiv}>

            <TopBar />

            {/* block 01 */}
            <div className={styles.block01}>

                <div className={styles.centerDiv}>

                    <div className={styles.container}>

                        <div className={styles.leftDiv}>
                            <h1 className={styles.label}>在在在 <br /> 無名伺服器 <br /> 團隊</h1>
                            <p className={styles.description}>長期架設伺服器需要耗費大量時間與金錢，如果你願意提供贊助，我們非常感謝你。</p>
                        </div>

                        <div className={styles.rightDiv}>
                            {/* <img src={teamImg} alt="Team" /> */}
                            <Image
                                src={teamImg}
                                alt="Team"
                            />
                        </div>

                    </div>

                </div>

            </div>

            {/* block 02 */}
            <div className={styles.figureDiv}>

                <div className={styles.container}>

                    <div className={styles.figureImgDiv}>
                        {/* <img src={quasiImg} alt="figure" /> */}
                        <Image
                            src={quasiImg}
                            alt="figure"
                        />
                        <h1 className={styles.figureLabel}>Quasi</h1>
                    </div>

                    <div className={styles.figureImgDiv}>
                        {/* <img src={moonFlameImg} alt="figure" /> */}
                        <Image
                            src={moonFlameImg}
                            alt="figure"
                        />
                        <h1 className={styles.figureLabel}>Moon_Flame</h1>
                    </div>

                    <div className={styles.figureImgDiv}>
                        {/* <img src={liujuhsinImg} alt="figure" /> */}
                        <Image
                            src={liujuhsinImg}
                            alt="figure"
                        />
                        <h1 className={styles.figureLabel}>liujuhsin</h1>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}