import React from "react";
import styles from "./TextImg.scss";

type IProps = {
    imgSrc: string;
    label: string;
    description: string;
    reverse?: boolean;
    alt?: string;
}

export default function TextImg(props: IProps) {

    return (
        <div className={styles.textImgDiv}  style={props.reverse !== undefined ? props.reverse ? { backgroundColor: "var(--dark-02-color)" } : { backgroundColor: "var(--dark-03-color)" } : { backgroundColor: "var(--dark-03-color)" }}>

            <div className={styles.container} style={props.reverse !== undefined ? props.reverse ? { flexDirection: "row-reverse" }  : {} : {}}>

                <div className={styles.imgDiv}>
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