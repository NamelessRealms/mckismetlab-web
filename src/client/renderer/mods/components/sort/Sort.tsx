import React from "react";
import ButtonToggle from "../../../common/components/buttonToggle/ButtonToggle";
import PaginationArrow from "../../../common/components/paginationArrow/PaginationArrow";
import styles from "./Sort.scss";

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

interface IProps {
    paginationValue: number;
    paginationMax: number;
    onPaginationChange?: (value: number) => void;
}

export default function Sort(props: IProps) {

    return (
        <div className={styles.sortDiv}>

            <div className={styles.leftDiv}>

                <h1 className={styles.title}>排序方式</h1>
                <ButtonToggle items={buttonToggleItemsData} />

            </div>

            <div className={styles.rightDiv}>
                <PaginationArrow value={props.paginationValue} max={props.paginationMax} onChange={(value) => {
                    if(props.onPaginationChange !== undefined) props.onPaginationChange(value);
                }} />
            </div>

        </div>
    )
}