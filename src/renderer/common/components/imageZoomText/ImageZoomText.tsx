import React from "react";
import styles from "./ImageZoomText.scss";

type IProps = {
    label: string;
    imgSrc: string;
    alt?: string;
    onClick?: () => void;
}

export default function ImageZoomText(props: IProps) {

    return (
        <div className={styles.imageZoomTextDiv} onClick={() => {
            if(props.onClick !== undefined) props.onClick();
        }}>

            <img className={styles.imgZoom} src={props.imgSrc} alt={props.alt} />
            
            <div className={styles.imageZoomTextLabelDiv}>
                <h1 className={styles.label}>{props.label}</h1>
            </div>

        </div>
    )
}