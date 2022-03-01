import React from "react";
import styles from "./ModInfo.scss";
import IModInfoData from "../../../../../../common/interfaces/IModInfoData";

import labelImg from "../../../../../../../assets/icons/label.png";
import downloadImg from "../../../../../../../assets/icons/download.png";
import refreshImg from "../../../../../../../assets/icons/refresh.png";
import writingImg from "../../../../../../../assets/icons/writing.png";
import Dates from "../../../../../../common/utils/dates";

interface IProps {
    data: IModInfoData
}

export default function ModInfo(props: IProps) {

    // const nowTime = new Date().getTime();
    // const dateReleasedTime = new Date(props.data.dateCreated).getTime();
    // const timeDifference = nowTime - dateReleasedTime;

    // const days = Math.floor(timeDifference / (24 * 3600 * 1000));

    // const leave1 = timeDifference % (24 * 3600 * 1000);
    // const hours = Math.floor(leave1 / (3600 * 1000));

    // const leave2 = leave1 % (3600 * 1000);
    // const minutes = Math.floor(leave2 / (60 * 1000));

    // const leave3 = leave2 % (60 * 1000);
    // const seconds = Math.round(leave3 / 1000);

    // console.log(days, hours, minutes, seconds);

    return (
        <div className={styles.modInfoDiv}>

            <div className={styles.leftDiv}>
                <img className={styles.modImg} src={props.data.imgUrl} alt="modImg" />
            </div>

            <div className={styles.rightDiv}>

                <div className={styles.rightDivTopDiv}>

                    <div className={styles.rightDivTopDivLeftDiv}>
                        <h1 className={styles.title}>{props.data.name}</h1>
                        <h2 className={styles.summary}>{props.data.summary}</h2>
                    </div>

                    <div className={styles.rightDivTopDivRightDiv}>
                        <h1 className={styles.author}>by {props.data.author.name}</h1>
                    </div>

                </div>

                <div className={styles.rightDivBottomDiv}>

                    <div className={`${styles.latestVersionDiv} ${styles.infoDiv}`}>
                        <div className={styles.leftDiv}>
                            <img src={labelImg} />
                        </div>
                        <div className={styles.rightDiv}>
                            <h1 className={styles.title_1}>最新版本</h1>
                            <h1 className={styles.title_2}>{props.data.latestMinecraftVersion}</h1>
                        </div>
                    </div>

                    <div className={`${styles.downloadDiv} ${styles.infoDiv}`}>
                        <div className={styles.leftDiv}>
                            <img src={downloadImg} />
                        </div>
                        <div className={styles.rightDiv}>
                            <h1 className={styles.title_1}>下載</h1>
                            <h1 className={styles.title_2}>{props.data.downloadCount}</h1>
                        </div>
                    </div>

                    <div className={`${styles.latestUpdateDiv} ${styles.infoDiv}`}>
                        <div className={styles.leftDiv}>
                            <img src={refreshImg} />
                        </div>
                        <div className={styles.rightDiv}>
                            <h1 className={styles.title_1}>最後更新</h1>
                            <h1 className={styles.title_2}>{Dates.fullYear(props.data.dateReleased)}</h1>
                        </div>
                    </div>

                    <div className={`${styles.createdDiv} ${styles.infoDiv}`}>
                        <div className={styles.leftDiv}>
                            <img src={writingImg} />
                        </div>
                        <div className={styles.rightDiv}>
                            <h1 className={styles.title_1}>已創建</h1>
                            <h1 className={styles.title_2}>{Dates.fullYear(props.data.dateCreated)}</h1>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}