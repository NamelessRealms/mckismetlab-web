import React from "react";
import ButtonToggle from "../../../common/components/buttonToggle/ButtonToggle";
import PaginationArrow from "../../../common/components/paginationArrow/PaginationArrow";
import "./Sort.scss";

const buttonToggleItemsData = [
    {
        id: 1,
        title: "最多下載"
    },
    {
        id: 2,
        title: "人氣"
    },
    {
        id: 3,
        title: "最近更新"
    }
]

export default function Sort() {

    return (
        <div className="sortDiv">

            <div className="leftDiv">

                <h1 className="title">排序方式</h1>
                <ButtonToggle items={buttonToggleItemsData} />

            </div>

            <div className="rightDiv">
                <PaginationArrow value={1} max={12} />
            </div>

        </div>
    )
}