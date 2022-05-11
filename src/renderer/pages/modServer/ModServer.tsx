import React from "react";
import TopBar from "../../common/components/TopBar/TopBar";
import styles from "./ModServer.scss";

import { useNavigate } from "react-router-dom";

import server01Img from "../../../assets/images/background/server_01.png";
import ButtonFocus from "../../common/components/buttonFocus/ButtonFocus";
import TextImg from "../../common/components/textImg/TextImg";
import serverQuasiImg from "../../../assets/images/figure/server_quasi.png"
import voteImg from "../../../assets/images/figure/vote.png";
import regularImg from "../../../assets/images/figure/regular.png";
import CardText from "../../common/components/cardText/CardText";
import Footer from "../../common/components/footer/Footer";

export default function ModServer() {

    const navigate = useNavigate();

    return (
        <div className={styles.modServerDiv}>

            <TopBar />

            {/* block 01 */}
            <div className={styles.block01}>

                <div className={styles.imgDiv}>
                    <img src={server01Img} alt="server image" />
                </div>

                <div className={styles.labelDiv}>

                    <div className={styles.container}>

                        <h1 className={styles.label}>模組包伺服器</h1>
                        <p className={styles.description}>我們提供您自由探索多人遊玩平台、模組討論區、管理伺服等等服務，讓你不用煩惱自架伺服器或不會玩模組的問題。</p>

                        <div className={styles.buttonDiv}>
                            <ButtonFocus className={styles.buttonFocusDiscord} content="DISCORD" onClick={() => window.open("https://discord.com/invite/8BB3NY8")}></ButtonFocus>
                            <ButtonFocus className={styles.buttonFocusLauncher} content="下載啟動器" onClick={() => navigate("/launcher")}></ButtonFocus>
                        </div>

                    </div>

                </div>

            </div>

            {/* block 02 */}
            <div className={styles.block02}>

                <div className={styles.container}>

                    <div className={styles.blockLeftDiv}>
                        <h1 className={styles.blockLeftLabel}>加入模組服之前<br />必須知道的事!</h1>
                    </div>

                    <div className={styles.blockRightDiv}>

                        <div className={styles.blockRightLabelDiv}>
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.05029 17.9725L14.012 13L9.05029 8.0275L10.5778 6.5L17.0778 13L10.5778 19.5L9.05029 17.9725Z" fill="#E5E5E5" />
                            </svg>
                            <h1 className={styles.blockRightLabel}>懂得使用Google搜尋功能查詢資料</h1>
                        </div>

                        <div className={styles.blockRightLabelDiv}>
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.05029 17.9725L14.012 13L9.05029 8.0275L10.5778 6.5L17.0778 13L10.5778 19.5L9.05029 17.9725Z" fill="#E5E5E5" />
                            </svg>
                            <h1 className={styles.blockRightLabel}>知道電腦配備能足夠跑的動模組包</h1>
                        </div>

                        <div className={styles.blockRightLabelDiv}>
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.05029 17.9725L14.012 13L9.05029 8.0275L10.5778 6.5L17.0778 13L10.5778 19.5L9.05029 17.9725Z" fill="#E5E5E5" />
                            </svg>
                            <h1 className={styles.blockRightLabel}>懂得安裝模組包基本知識</h1>
                        </div>

                    </div>

                </div>

            </div>

            {/* block 03 */}
            <TextImg
                label="全年無休，365天不間斷"
                description="365天 24hr 不停開服，不會突然無預警關服消失。"
                imgSrc={serverQuasiImg}
                reverse={true}
                imgDivWidth="80%"
                imgWidth="80%"
            />

            {/* block 04 */}
            <TextImg
                label="讓玩家以投票的方式選擇模組包"
                description="給玩家可以以投票的方式選擇模組包你想要玩的模組包。"
                imgSrc={voteImg}
                imgDivWidth="80%"
                imgWidth="80%"
            />

            {/* block 05 */}
            <TextImg
                label="定期更換不同的模組包"
                description="我們定期更換不同的模組包，不會突然停換模組包，造成空服的問題。"
                imgSrc={regularImg}
                reverse={true}
                imgDivWidth="80%"
                imgWidth="80%"
            />

            {/* block 06 */}
            <div className={styles.block06}>

                <div className={styles.container}>

                    <h1 className={styles.label}>再加入前，請遵守以下三大規則</h1>

                    <div className={styles.rulesDiv}>
                        <CardText
                            label="禁止使用BUG"
                            description="玩模組能讓你強大和輕鬆，沒必要使用BUG"
                        />
                        <CardText
                            className={styles.cardTextCenter}
                            label="禁止破壞伺服器"
                            description="破壞伺服器是非常可惡的行為，不管是國外服或國內服都不應該破壞別人的伺服器!"
                        />
                        <CardText
                            label="不要欺負丶騷擾玩家"
                            description="大家好好的當個好公民不要當別人不喜歡你的壞玩家"
                        />
                    </div>

                    <h1 className={styles.label02}>來吧，馬上加入我們吧</h1>
                    <p className={styles.description02}>詳細加入訊息公佈在Discord</p>
                    <ButtonFocus className={styles.discordButton} content="DISCORD" onClick={() => window.open("https://discord.com/invite/8BB3NY8")} />

                </div>

            </div>

            <Footer />

        </div>
    )
}