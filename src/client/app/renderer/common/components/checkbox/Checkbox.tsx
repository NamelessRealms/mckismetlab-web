import React from "react";
import "./Checkbox.scss";

type IProps = {
    checked: boolean;
    content?: string;
    className?: string;
    imgSrc?: string;
    onClickChecked?: (state: boolean) => void;
}
export default function Checkbox(props: IProps) {

    return (
        <div className={`checkboxDiv ${props.className}`}>
            
            <label className="container">
                {
                    props.imgSrc !== undefined ? <img src={props.imgSrc} alt="icon" /> : null
                }
                <h1 className="text">{props.content}</h1>
                <input type="checkbox" className="checkbox" checked={props.checked} onChange={(event) => {

                    if(props.onClickChecked === undefined) return;
                    props.onClickChecked(event.target.checked);

                }} />
                <span className="checkMark"></span>
            </label>

        </div>
    );
}