import React from "react";
import "./PaginationArrow.scss";

import arrowImg from "../../../../../assets/icons/arrow.png";

interface IProps {
    value: number;
    max: number;
}

export default function PaginationArrow(props: IProps) {
    
    const [value, setValue] = React.useState<number>(props.value);

    return (
        <div className="paginationArrowDiv">

            <div className="paginationNumberDiv">

                <h1>{value}</h1>
                <h1>/</h1>
                <h1>{props.max}</h1>

            </div>

            <div className="paginationButton">

                <button 
                    className="buttonLeft"
                    onClick={() => {
                        setValue((value) => {
                            if(value > 1) value--
                            return value;
                        });
                    }}
                ><img src={arrowImg} alt="arrow" /></button>
                <button 
                    className="buttonRight"
                    onClick={() => {
                        setValue((value) => {
                            if(value < props.max) value++
                            return value;
                        });
                    }}
                ><img src={arrowImg} alt="arrow" /></button>
                
            </div>

        </div>
    )
}