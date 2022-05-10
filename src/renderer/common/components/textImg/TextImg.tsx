import React from "react";
import styles from "./TextImg.scss";

type IProps = {
    imgSrc: string;
    label: string;
    description: string;
    reverse?: boolean;
    alt?: string;
    backgroundColor?: string;
    imgDivWidth?: string;
    imgWidth?: string;
    imgDivHeight?: string;
    className?: string;
}

export default function TextImg(props: IProps) {

    const backgroundColor01 = props.backgroundColor !== undefined ? props.backgroundColor : "var(--dark-02-color)";
    const backgroundColor02 = props.backgroundColor !== undefined ? props.backgroundColor : "var(--dark-03-color)";

    return (
        <div className={`${styles.textImgDiv} ${props.className}`}  style={props.reverse !== undefined ? props.reverse ? { backgroundColor: backgroundColor01 } : { backgroundColor: backgroundColor02 } : { backgroundColor: backgroundColor02 }}>

            <div className={styles.container} style={props.reverse !== undefined ? props.reverse ? { flexDirection: "row-reverse" }  : {} : {}}>

                <div className={styles.imgDiv} style={ props.reverse ? { width: props.imgDivWidth, height: props.imgDivHeight, textAlign: "right" } : { width: props.imgDivWidth, height: props.imgDivHeight, textAlign: "left" } }>
                    <img src={props.imgSrc} alt={props.alt} style={{ width: props.imgWidth }} />
                </div>

                <div className={styles.textDiv}>
                    <h1 className={styles.label}>{props.label}</h1>
                    <p className={styles.description}>{props.description}</p>
                </div>

            </div>
        </div>
    )
}