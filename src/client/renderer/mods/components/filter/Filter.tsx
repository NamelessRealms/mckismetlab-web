import React from "react";
import styles from "./Filter.scss";

import Checkbox from "../../../common/components/checkbox/Checkbox";

import filterImg from "../../../../assets/icons/filter.png";
import cpuImg from "../../../../assets/icons/cpu.png";
import magicImg from "../../../../assets/icons/magic.png";
import boxImg from "../../../../assets/icons/box.png";
import books from "../../../../assets/icons/two-books.png";
import adventureImg from "../../../../assets/icons/adventure.png";
import infoImg from "../../../../assets/icons/information.png";
import archiveImg from "../../../../assets/icons/archive.png";
import weaponImg from "../../../../assets/icons/weapon.png";
import settingImg from "../../../../assets/icons/filter-setting.png";
import footImg from "../../../../assets/icons/fast-food.png";
import technologyImg from "../../../../assets/icons/technology.png";
import DropMenu from "../../../common/components/dropMenu/DropMenu";

interface IItem {
    id: number;
    title: string,
    iconImgSrc: string;
    state: boolean;
}

interface IModLoaderItem {
    id: string;
    title: string,
    state: boolean;
}

const items = [
    {
        id: 1,
        title: "技術",
        iconImgSrc: cpuImg,
        state: false
    },
    {
        id: 2,
        title: "魔法",
        iconImgSrc: magicImg,
        state: false
    },
    {
        id: 3,
        title: "存儲",
        iconImgSrc: boxImg,
        state: false
    },
    {
        id: 4,
        title: "API和函式庫",
        iconImgSrc: books,
        state: false
    },
    {
        id: 5,
        title: "冒險",
        iconImgSrc: adventureImg,
        state: false
    },
    {
        id: 6,
        title: "地圖和信息",
        iconImgSrc: infoImg,
        state: false
    },
    {
        id: 7,
        title: "雜項",
        iconImgSrc: archiveImg,
        state: false
    },
    {
        id: 8,
        title: "盔甲工具和武器",
        iconImgSrc: weaponImg,
        state: false
    },
    {
        id: 9,
        title: "服務器工具",
        iconImgSrc: settingImg,
        state: false
    },
    {
        id: 10,
        title: "食物",
        iconImgSrc: footImg,
        state: false
    },
    {
        id: 11,
        title: "紅石",
        iconImgSrc: technologyImg,
        state: false
    }
]

const versionMenus = [
    {
        value: "所有版本"
    },
    {
        value: "1.18.1"
    },
    {
        value: "1.16.5"
    }
]

const modLoaders = [
    {
        id: "forge",
        title: "Forge",
        state: false
    },
    {
        id: "fabric",
        title: "Fabric",
        state: false
    }
]

export default function Filter() {

    const [checkboxItems, setCheckboxItems] = React.useState<Array<IItem>>(items);
    const [modLoadersItems, setModLoadersItems] = React.useState<Array<IModLoaderItem>>(modLoaders);

    const changeCheckboxItemState = (type: "modLoader" | "checkboxItem", id: number | string, state: boolean) => {
        
        let callback: React.Dispatch<React.SetStateAction<IModLoaderItem[]>> | React.Dispatch<React.SetStateAction<IItem[]>>;

        if(type === "modLoader") {
            callback = setModLoadersItems;
        } else {
            callback = setCheckboxItems;
        }

        callback((item: any) => {
            return item.map((value: any) => {
                if (value.id === id) value.state = state;
                return value;
            });
        });
    }

    return (
        <div className={styles.filterDiv}>

            <div className={styles.titleDiv}>
                <img src={filterImg} alt="filter" />
                <h1 className={styles.text}>條件篩選</h1>
            </div>

            <h1 className={styles.title}>分類</h1>
            <div className={styles.checkboxArrayDiv}>
                {
                    checkboxItems.map((item) => (
                        <Checkbox key={item.id} className={styles.checkboxItem} content={item.title} checked={item.state} onClickChecked={(state) => changeCheckboxItemState("checkboxItem", item.id, state)} imgSrc={item.iconImgSrc} />
                    ))
                }
            </div>

            <div className={styles.tr}></div>

            <h1 className={styles.title}>版本</h1>
            <div className={styles.selectVersionDiv}>
                <DropMenu items={versionMenus} value="所有版本" ></DropMenu>
            </div>

            <div className={styles.tr}></div>
            <h1 className={styles.title}>模組平台</h1>
            <div className={styles.checkboxModLoaderDiv}>
                {
                    modLoadersItems.map((item) => (
                        <Checkbox key={item.id} className={styles.checkboxItem} content={item.title} checked={item.state} onClickChecked={(state) => changeCheckboxItemState("modLoader", item.id, state)} />
                    ))
                }
            </div>


        </div>
    )

}