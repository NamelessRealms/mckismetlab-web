import React from "react";
import "./ButtonFocus.scss";

type IProps = {
    content: string | number;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

export default function ButtonFocus(props: IProps) {
    return (
        <button
            className={`buttonFocus ${props.className}`}
            style={props.disabled !== undefined ? props.disabled ? { cursor: "not-allowed" } : { cursor: "pointer" } : { cursor: "pointer" }}
            onClick={() => {if (props.onClick !== undefined) props.onClick()}}
        >{props.content}</button>
    );
}