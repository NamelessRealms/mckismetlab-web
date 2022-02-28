import React from "react";
import "./DropMenu.scss";

import Trail from "../../animations/components/trail/Trail";
import arrowImg from "../../../../../assets/icons/arrow.png";

interface IProps {
    items: Array<{
        value: string;
    }>;

    value: string;
}

export default function DropMenu(props: IProps) {

    const [value, setValue] = React.useState<string>(props.value);
    const [open, setOpen] = React.useState(false);
    const [displayNone, setDisplayNone] = React.useState(true);

    const findItemText = () => {
        const find = props.items.find((item) => item.value === value);
        return find !== undefined ? find.value : undefined;
    }

    return (
        <div className="dropMenuDiv">
            <div className="dropMenuButton" onClick={() => setOpen((value) => !value)}>
                <h1 className="dropMenuButtonText">
                    {
                        findItemText() !== undefined ? findItemText() : ""
                    }
                </h1>
                <img className="arrowImg" src={arrowImg} alt="arrow" style={ displayNone ? { transform: "rotate(0deg)" } : { transform: "rotate(90deg)" } } />
            </div>
            <div className="menu" style={open ? { background: "#262626" } : displayNone ? { display: "none" } : {}}>
                <Trail open={open} onStart={() => setDisplayNone(false)} onCloseEnd={() => setDisplayNone(true)}>
                    {
                        props.items.map((item) => (
                            <div key={item.value} onClick={() => {
                                setOpen(false);
                                setValue(item.value);
                            }}>
                                <h1>{item.value}</h1>
                            </div>
                        ))
                    }
                </Trail>
            </div>
        </div>
    )
}