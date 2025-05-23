import React from "react";
import styles from "./Launcher.module.scss";
import Head from "next/head";

import launcher01Img from "../../assets/images/background/launcher_01.png";
import launcher02Img from "../../assets/images/background/launcher_02.png";
import launcher03Img from "../../assets/images/background/launcher_03.png";
import launcher04Img from "../../assets/images/background/launcher_04.png";
import TopBar from "../../src/components/TopBar/TopBar";
import ButtonFocus from "../../src/components/buttonFocus/ButtonFocus";
import TextImg from "../../src/components/textImg/TextImg";
import Footer from "../../src/components/footer/Footer";
import { GetStaticProps } from "next";
import DropMenuNavigator from "../../src/components/dropMenuNavigator/DropMenuNavigator";

interface ILauncher {
    version: string;
    downloadUrl: {
        mac: {
            arm64: string | null;
            x64: string | null;
        };
        windows: string | null;
    }
}

interface IProps {
    launcher: ILauncher | null
}

export default function Launcher(props: IProps) {

    return (
        <div className={styles.launcherDiv}>

            <Head>
                <title>無名啟動器 | Nameless Realms</title>
            </Head>

            <TopBar />

            {/* block 01 */}
            <div className={styles.block01}>

                <div className={styles.launcherVideo}>
                    <video
                        preload="auto"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    >
                        <source src="/video/launcher.mp4" type="video/mp4"></source>
                    </video>
                </div>

                <div className={styles.labelDiv}>

                    <div className={styles.container}>

                        <h1 className={styles.label}>無名啟動器</h1>
                        <p className={styles.description}>無名啟動器是我們開發的一款模組啟動器，讓你可以輕鬆、快速地啟動遊戲，而不必擔心繁瑣的安裝程序。</p>

                        <div className={styles.buttonDiv}>
                            {
                                props.launcher !== null
                                    ?
                                    <>
                                        <ButtonFocus
                                            className={styles.downloadButton}
                                            content="Windows"
                                            onClick={() => { if(props.launcher?.downloadUrl.windows !== null) window.open(props.launcher?.downloadUrl.windows) }}
                                        />
                                        <DropMenuNavigator
                                            className={styles.downloadButton}
                                            hover={false}
                                            label="Mac"
                                            items={[{ label: "arm64", value: props.launcher.downloadUrl.mac.arm64 !== null ? props.launcher.downloadUrl.mac.arm64 : "null" }, { label: "x64", value: props.launcher.downloadUrl.mac.x64 !== null ? props.launcher.downloadUrl.mac.x64 : "null" }]}
                                            onClick={(value) => { if (value !== "null") window.open(value); }}
                                        />
                                    </>
                                    :
                                    <>
                                        <ButtonFocus className={styles.downloadButton} content="Windows"></ButtonFocus>
                                        <ButtonFocus className={styles.downloadButton} content="Mac"></ButtonFocus>
                                        {/* <ButtonFocus className={styles.downloadButton} content="Linux"></ButtonFocus> */}
                                    </>
                            }
                        </div>

                        {
                            props.launcher !== null
                            ?
                            <h1 className={styles.launcherVersionText}>{props.launcher.version}</h1>
                            :
                            null
                        }

                    </div>

                </div>

            </div>

            {/* block 02 */}
            <TextImg
                className={styles.textImg}
                label="簡單又舒適的介面"
                description="易於使用的簡單介面，沒有繁瑣的設計，只有簡單舒適的體驗。"
                imgSrc={launcher01Img}
                reverse={false}
                backgroundColor="--dark-03-color"
                imgDivWidth="55%"
            />
            <TextImg
                className={styles.textImg}
                label="Java 設定管理"
                description="你可以個別設定 Java 記憶體、參數、設定路徑。"
                imgSrc={launcher02Img}
                reverse={true}
                backgroundColor="--dark-03-color"
                imgDivWidth="55%"
            />
            <TextImg
                className={styles.textImg}
                label="自動安裝"
                description="不必手動安裝模組包、自訂模組或模組載入程式，一切都自動進行。 "
                imgSrc={launcher03Img}
                reverse={false}
                backgroundColor="--dark-03-color"
                imgDivWidth="55%"
            />
            <TextImg
                className={styles.textImg}
                label="國際化"
                description="我們的啟動器支援多種語言，讓您輕鬆切換語言。"
                imgSrc={launcher04Img}
                reverse={true}
                backgroundColor="--dark-03-color"
                imgDivWidth="55%"
            />

            {/* block 03 */}
            <div className={styles.githubDiv}>

                <div className={styles.container}>

                    <div className={styles.leftDiv} onClick={() => window.open("https://github.com/mcKismetLab/mckismetlab-launcher")}>
                        <svg className={styles.githubIconSvg} viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#F2F2F2"></path>
                            </g>
                        </svg>
                        <svg className={styles.githubSvg} viewBox="0 0 512 139" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M98.6961598,59.3124474 L55.6354962,59.3124474 C54.5247282,59.3124474 53.623096,60.2151464 53.623096,61.3259144 L53.623096,82.3792882 C53.623096,83.4900562 54.5247282,84.3938224 55.6354962,84.3938224 L72.4335936,84.3938224 L72.4335936,110.550753 C72.4335936,110.550753 68.6616775,111.836513 58.2336902,111.836513 C45.930948,111.836513 28.744455,107.341157 28.744455,69.5494382 C28.744455,31.7491835 46.6405165,26.7758029 63.4418154,26.7758029 C77.9852995,26.7758029 84.2508415,29.336651 88.2372288,30.5701264 C89.4899103,30.9542537 90.648694,29.706907 90.648694,28.5950722 L95.4524188,8.25340062 C95.4524188,7.73376182 95.2763603,7.10742103 94.6830971,6.68167999 C93.0644278,5.52716422 83.1870225,-1.42108547e-14 58.2336902,-1.42108547e-14 C29.487101,-1.42108547e-14 0,12.2301846 0,71.022993 C0,129.817935 33.7605165,138.579238 62.2094068,138.579238 C85.7649432,138.579238 100.054476,128.51297 100.054476,128.51297 C100.643471,128.187529 100.707493,127.364856 100.707493,126.987131 L100.707493,61.3259144 C100.707493,60.2151464 99.8069278,59.3124474 98.6961598,59.3124474 Z M320.495497,7.35923776 C320.495497,6.23886664 319.607737,5.33510059 318.496969,5.33510059 L294.251072,5.33510059 C293.143503,5.33510059 292.24294,6.23886664 292.24294,7.35923776 C292.24294,7.36457288 292.24934,54.215292 292.24934,54.215292 L254.456556,54.215292 L254.456556,7.35923776 C254.456556,6.23886664 253.564526,5.33510059 252.455893,5.33510059 L228.211061,5.33510059 C227.107764,5.33510059 226.208265,6.23886664 226.208265,7.35923776 L226.208265,134.231131 C226.208265,135.350435 227.107764,136.26167 228.211061,136.26167 L252.455893,136.26167 C253.564526,136.26167 254.456556,135.350435 254.456556,134.231131 L254.456556,79.9635547 L292.24934,79.9635547 C292.24934,79.9635547 292.183187,134.226863 292.183187,134.231131 C292.183187,135.350435 293.082684,136.26167 294.191317,136.26167 L318.494835,136.26167 C319.605604,136.26167 320.493364,135.350435 320.495497,134.231131 L320.495497,7.35923776 Z M144.371023,24.3216565 C144.371023,15.591298 137.371371,8.53616094 128.735977,8.53616094 C120.10912,8.53616094 113.104133,15.591298 113.104133,24.3216565 C113.104133,33.042412 120.10912,40.1167554 128.735977,40.1167554 C137.371371,40.1167554 144.371023,33.042412 144.371023,24.3216565 Z M142.447186,107.534288 L142.447186,48.9698214 C142.447186,47.8579864 141.549822,46.9488852 140.441188,46.9488852 L116.272115,46.9488852 C115.163481,46.9488852 114.171153,48.0927309 114.171153,49.2045657 L114.171153,133.109693 C114.171153,135.575576 115.707662,136.308619 117.696587,136.308619 L139.472334,136.308619 C141.861392,136.308619 142.447186,135.135964 142.447186,133.070213 L142.447186,107.534288 Z M413.161929,46.9488852 L389.10169,46.9488852 C387.998389,46.9488852 387.099963,47.8579864 387.099963,48.9772906 L387.099963,111.186697 C387.099963,111.186697 380.988068,115.658579 372.312128,115.658579 C363.637256,115.658579 361.334627,111.722341 361.334627,103.227794 L361.334627,48.9772906 C361.334627,47.8579864 360.43833,46.9488852 359.333962,46.9488852 L334.915206,46.9488852 C333.812978,46.9488852 332.910277,47.8579864 332.910277,48.9772906 L332.910277,107.335822 C332.910277,132.566579 346.972537,138.739291 366.317608,138.739291 C382.1874,138.739291 394.983106,129.971587 394.983106,129.971587 C394.983106,129.971587 395.592374,134.591784 395.867664,135.140232 C396.144024,135.686546 396.862125,136.238196 397.63785,136.238196 L413.172597,136.169906 C414.274829,136.169906 415.177528,135.258671 415.177528,134.144702 L415.170059,48.9772906 C415.170059,47.8579864 414.27056,46.9488852 413.161929,46.9488852 Z M468.596822,115.706595 C460.251661,115.452644 454.591116,111.665789 454.591116,111.665789 L454.591116,71.4882139 C454.591116,71.4882139 460.175898,68.0652134 467.027235,67.4527437 C475.691441,66.6770202 484.039804,69.2944203 484.039804,89.9626002 C484.039804,111.757553 480.272156,116.058711 468.596822,115.706595 Z M478.086899,44.2237159 C464.421573,44.2237159 455.12676,50.3206689 455.12676,50.3206689 L455.12676,7.35923776 C455.12676,6.23886664 454.231532,5.33510059 453.126097,5.33510059 L428.811913,5.33510059 C427.706479,5.33510059 426.808048,6.23886664 426.808048,7.35923776 L426.808048,134.231131 C426.808048,135.350435 427.706479,136.26167 428.815112,136.26167 L445.684702,136.26167 C446.444417,136.26167 447.019542,135.870074 447.444215,135.18398 C447.863555,134.502154 448.468557,129.334575 448.468557,129.334575 C448.468557,129.334575 458.41105,138.756363 477.232216,138.756363 C499.328069,138.756363 512,127.548384 512,88.4410293 C512,49.3336752 491.761829,44.2237159 478.086899,44.2237159 Z M212.229235,46.731213 L194.041876,46.731213 C194.041876,46.731213 194.014134,22.7093892 194.014134,22.704054 C194.014134,21.7949529 193.545712,21.3404024 192.494697,21.3404024 L167.709954,21.3404024 C166.746435,21.3404024 166.22893,21.7640094 166.22893,22.6901829 L166.22893,47.5197408 C166.22893,47.5197408 153.808816,50.5180675 152.969071,50.760281 C152.132527,51.0024947 151.516857,51.77395 151.516857,52.6937215 L151.516857,68.2967567 C151.516857,69.4192619 152.413154,70.3240948 153.521788,70.3240948 L166.22893,70.3240948 L166.22893,107.859729 C166.22893,135.739897 185.785275,138.478938 198.98218,138.478938 C205.011911,138.478938 212.224966,136.542296 213.41576,136.102684 C214.135999,135.838063 214.554271,135.092216 214.554271,134.283415 L214.574544,117.119329 C214.574544,116.000025 213.629165,115.094125 212.564279,115.094125 C211.504728,115.094125 208.79343,115.525201 206.002106,115.525201 C197.069013,115.525201 194.041876,111.371292 194.041876,105.994577 C194.041876,100.622131 194.04081,70.3240948 194.04081,70.3240948 L212.229235,70.3240948 C213.337868,70.3240948 214.235233,69.4192619 214.235233,68.2967567 L214.235233,48.7532162 C214.235233,47.633912 213.337868,46.731213 212.229235,46.731213 Z" fill="#F2F2F2"></path>
                            </g>
                        </svg>
                    </div>

                    <div className={styles.rightDiv}>
                        <h1 className={styles.label}>無名啟動器源代碼都在 GitHub <br /> License: GPL-3.0</h1>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    const githubResponse = await fetch("https://api.github.com/repos/mcKismetLab/mckismetlab-launcher/releases/latest");

    let launcherData: ILauncher | null = null;

    if (githubResponse.status === 200) {
        const mckismetlabLauncherData = await githubResponse.json();
        const assets = mckismetlabLauncherData.assets as Array<any>;
        const version = mckismetlabLauncherData.tag_name;
        const windows = assets.find((item: any) => item.name.split(".").pop() === "exe");
        const macArm64 = assets.find((item: any) => {
            if (item.name.split(".").pop() === "dmg") return item.name.indexOf("arm64") !== -1;
            return false;
        });
        const macX64 = assets.find((item: any) => {
            if (item.name.split(".").pop() === "dmg") return item.name.indexOf("arm64") === -1;
            return false;
        });
        launcherData = {
            version: version,
            downloadUrl: {
                mac: {
                    arm64: macArm64 !== undefined ? macArm64.browser_download_url : null,
                    x64: macX64 !== undefined ? macX64.browser_download_url : null
                },
                windows: windows !== undefined ? windows.browser_download_url : null
            }
        }
    }

    return {
        props: {
            launcher: launcherData
        },
        revalidate: 60
    }
}