import React from "react";
import TopBar from "../../common/components/TopBar/TopBar";
import styles from "./Front.scss";

import frontMp4 from "../../../assets/video/front.mp4";
import ButtonFocus from "../../common/components/buttonFocus/ButtonFocus";
import TextImg from "../../common/components/textImg/TextImg";
import quasiImg from "../../../assets/images/figure/quasi.png";
import liujuhsinImg from "../../../assets/images/figure/liujuhsin.png"
import ImageZoomText from "../../common/components/imageZoomText/ImageZoomText";
import server01Img from "../../../assets/images/background/server_01.png";
import Footer from "../../common/components/footer/Footer";

export default function Front() {

    return (
        <div className={styles.frontDiv}>

            <TopBar />

            {/* block 01 */}
            <div className={styles.pageTop}>

                <div className={styles.frontVideo}>
                    <video
                        preload="auto"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    >
                        <source src={frontMp4} type="video/mp4"></source>
                    </video>
                </div>

                <div className={styles.pageTopLabelDiv}>
                    <div className={styles.container}>
                        <h1 className={styles.label}>無名伺服器</h1>
                        <h1 className={styles.label}>探索生存</h1>
                        <div className={styles.buttonDiv}>
                            <ButtonFocus className={styles.buttonFocusDiscord} content="DISCORD"></ButtonFocus>
                            <ButtonFocus className={styles.buttonFocusLauncher} content="下載啟動器"></ButtonFocus>
                        </div>
                    </div>
                </div>

            </div>

            {/* block 02 */}
            <TextImg
                label="長期開服，服務不間斷"
                description="我們提供穩定的多人模組遊玩伺服器、模組社群討論區等等服務，不會突然無預警關服。"
                imgSrc={quasiImg}
            />

            {/* block 03 */}
            <TextImg
                label="自己開發，啟動器"
                description="我們開發的無名啟動器，給你方便快速啟動遊戲，無需自己安裝模組包、Java、自定義模組，就能馬上進來遊玩。"
                imgSrc={liujuhsinImg}
                reverse={true}
            />

            {/* block 04 */}
            <div className={styles.block04Server}>

                <h1 className={styles.label}>無名伺服器，現在正在開服中</h1>

                <div className={styles.discordAndIpButtonDiv}>
                    <ButtonFocus className={styles.buttonFocusDiscord} content="DISCORD"></ButtonFocus>
                    <ButtonFocus className={styles.buttonFocusServerIp} content="mcKismetLab.net"></ButtonFocus>
                </div>

                <div className={styles.serverListDiv}>
                    <ImageZoomText
                        label="模組包伺服器"
                        imgSrc={server01Img}
                    />
                </div>

            </div>

            <Footer />

        </div>
    )
}