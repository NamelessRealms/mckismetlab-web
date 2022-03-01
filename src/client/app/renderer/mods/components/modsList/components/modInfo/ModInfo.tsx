import React from "react";
import styles from "./ModInfo.scss";
import IModInfoData from "../../../../../../common/interfaces/IModInfoData";

interface IProps {
    data: IModInfoData
}

export default function ModInfo(props: IProps) {

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

                </div>

            </div>

        </div>
    )
}