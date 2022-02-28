import React from "react";
import "./PaginationNumberButton.scss";

import arrowImg from "../../../../../assets/icons/arrow.png";

interface IProps {
    value: number;
    max: number;
}

export default function PaginationNumberButton(props: IProps) {

    const [value, setValue] = React.useState<number>(props.value);

    const getButtons = (index: number): Array<number> => {

        const buttonItems = new Array<number>();

        for(let i = 0; i < 5; i++) {
            if(i + index > props.max) {
                break;
            } else {
                buttonItems.push(i + index);
            }
        }

        return buttonItems;
    }

    return (
        <div className="paginationNumberButtonDiv">

            <button
                className="buttonLeft buttonArrow"
                onClick={() => {
                    setValue((value) => {
                        if (value > 1) value--
                        return value;
                    });
                }}
            ><img src={arrowImg} alt="arrow" /></button>

            {
                getButtons(value).map((value) => (
                    <button className="buttonClick">{value}</button>
                ))
            }

            <button
                className="buttonRight buttonArrow"
                onClick={() => {
                    setValue((value) => {
                        if (value < props.max) value++
                        return value;
                    });
                }}
            ><img src={arrowImg} alt="arrow" /></button>

        </div>
    )
}