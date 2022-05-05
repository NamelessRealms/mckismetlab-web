import React from "react";
import styles from "./TopBar.scss";

import ButtonFocus from "../buttonFocus/ButtonFocus";
import mckismetlabLogoTitleImg from "../../../../assets/images/logo/mckismetlab-title.png";
import InputIcon from "../inputIcon/InputIcon";

export default function TopBar() {

    const [searchInput, setSearchInput] = React.useState<string>();

    return (
        <div className={styles.TopBarDiv}>
            <div className={styles.leftDiv}>
                <img src={mckismetlabLogoTitleImg} alt="logo-title" />
                <div></div>
            </div>
            <div className={styles.centerDiv}>
                <InputIcon className={styles.inputIcon} type="text" icon="search" value={searchInput} onChange={setSearchInput} />
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.buttonDiv}>
                    <ButtonFocus className={styles.buttonFocus} content="登入" />
                </div>
            </div>
        </div>
    )
}