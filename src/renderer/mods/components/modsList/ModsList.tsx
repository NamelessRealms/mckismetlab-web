import React from "react";
import PaginationNumberButton from "../../../common/components/paginationNumber/PaginationNumberButton";
import Filter from "../filter/Filter";
import Sort from "../sort/Sort";
import ModInfo from "./components/modInfo/ModInfo";
import styles from "./ModsList.scss";
import IModInfoData from "../../../../common/interfaces/IModInfoData";

const modInfosData: Array<IModInfoData> = [
    {
        id: 238222,
        name: "Just Enough Items (JEI)",
        summary: "View Items and Recipes",
        imgUrl: "https://media.forgecdn.net/avatars/29/69/635838945588716414.jpeg",
        author: {
            name: "mezz",
            url: "https://www.curseforge.com/members/17072262-mezz?username=mezz",
        },
        modLoaders: [
            "Forge"
        ],
        latestMinecraftVersion: "1.18.1",
        downloadCount: 155870464,
        dateReleased: "2022-02-27T04:00:04.647Z",
        dateCreated: "2015-11-23T22:55:58.84Z"
    }
]

export default function ModsList() {

    const [paginationIndex, setPaginationIndex] = React.useState<number>(1);
    const [modInfos, setModInfos] = React.useState<Array<IModInfoData>>(modInfosData);

    return (
        <div className={styles.modsListDiv}>

            <div className={styles.centerDiv}>

                <div className={styles.sider} />

                <div className={styles.leftDiv}>
                    <Filter />
                </div>

                <div className={styles.rightDiv}>

                    <Sort paginationValue={paginationIndex} paginationMax={12} onPaginationChange={setPaginationIndex} />

                    {
                        modInfos.map((item) => (
                            <ModInfo data={item} />
                        ))
                    }

                </div>

                <div className={styles.sider} />

            </div>

            <div className={styles.bottomDiv}>
                <PaginationNumberButton value={paginationIndex} max={12} onChange={setPaginationIndex} />
            </div>

        </div>
    )
}