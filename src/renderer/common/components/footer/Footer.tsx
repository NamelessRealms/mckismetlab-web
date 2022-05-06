import React from "react";
import styles from "./Footer.scss";

import mckismetlabLogoTitleImg from "../../../../assets/images/logo/mckismetlab-title.png";

export default function Footer() {

    return (
        <div className={styles.footerDiv}>

            <img src={mckismetlabLogoTitleImg} alt="mckismetlab logo" />

            <p className={styles.copyrightText}>Copyright © 2019 - 2022 無名伺服器 mcKismetLab. 版權所有 All rights reserved</p>

        </div>
    )
}