import React from "react";
import "./TopBar.scss";

import ButtonFocus from "../buttonFocus/ButtonFocus";
import mckismetlabLogoTitleImg from "../../../../../assets/images/logo/mckismetlab-title.png";
import InputIcon from "../inputIcon/InputIcon";

export default function TopBar() {

    const [searchInput, setSearchInput] = React.useState<string>();

    return (
        <div className="TopBarDiv">
            <div className="leftDiv">
                <img src={mckismetlabLogoTitleImg} alt="logo-title" />
                <div></div>
            </div>
            <div className="centerDiv">
                <InputIcon className="inputIcon" type="text" icon="search" value={searchInput} onChange={setSearchInput} />
            </div>
            <div className="rightDiv">
                <div className="buttonDiv">
                    <ButtonFocus className="buttonFocus" content="登入" />
                </div>
            </div>
        </div>
    )
}