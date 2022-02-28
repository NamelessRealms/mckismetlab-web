import React from "react";
import PaginationNumberButton from "../../../common/components/paginationNumber/PaginationNumberButton";
import Filter from "../filter/Filter";
import Sort from "../sort/Sort";
import "./ModsList.scss";

export default function ModsList() {

    return (
        <div className="modsListDiv">

            <div className="centerDiv">

                <div className="sider" />

                <div className="leftDiv">
                    <Filter />
                </div>

                <div className="rightDiv">
                    <Sort />
                </div>

                <div className="sider" />

            </div>

            <div className="bottomDiv">
                <PaginationNumberButton value={1} max={12} />
            </div>

        </div>
    )
}