import React from "react";
import "./ButtonToggle.scss";

interface IProps {
    items: Array<{
        id: number,
        title: string;
    }>;
    onClick?: (id: number) => void;
}

export default function ButtonToggle(props: IProps) {

    const [index, setIndex] = React.useState<number>(0);
    // const [items, setItems] = React.useState<Array<{ title: string; }>>(props.items);

    return (
        <div className="buttonToggleDiv">
            {
                props.items.map((item, mapIndex) => (
                    <button 
                        onClick={() => { setIndex(mapIndex); if(props.onClick !== undefined) props.onClick(item.id); }}
                        style={ mapIndex === index ? { backgroundColor: "#E0760F" } : {} }
                    >{item.title}</button>
                ))
            }
        </div>
    )
}