import React from "react";
import styles from "./TextImg.scss";

type IProps = {
    imgSrc: string;
    label: string;
    description: string;
    reverse?: boolean;
    alt?: string;
    backgroundColor?: string;
    imgWidth?: string;
    imgHeight?: string;
    className?: string;
}

export default function TextImg(props: IProps) {

    const backgroundColor01 = props.backgroundColor !== undefined ? props.backgroundColor : "var(--dark-02-color)";
    const backgroundColor02 = props.backgroundColor !== undefined ? props.backgroundColor : "var(--dark-03-color)";

    return (
        <div className={`${styles.textImgDiv} ${props.className}`}  style={props.reverse !== undefined ? props.reverse ? { backgroundColor: backgroundColor01 } : { backgroundColor: backgroundColor02 } : { backgroundColor: backgroundColor02 }}>

            <div className={styles.container} style={props.reverse !== undefined ? props.reverse ? { flexDirection: "row-reverse" }  : {} : {}}>

                <div className={styles.imgDiv} style={{ width: props.imgWidth, height: props.imgHeight }}>
                    <img src={props.imgSrc} alt={props.alt} />
                </div>

                <div className={styles.textDiv}>
                    <h1 className={styles.label}>{props.label}</h1>
                    <p className={styles.description}>{props.description}</p>
                </div>

            </div>
        </div>
    )
}