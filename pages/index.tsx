import TopBar from "../components/TopBar/TopBar"
import styles from "./Home.module.scss"
import Head from "next/head";

import { useRouter } from "next/router";

import serverQuasiImg from "../assets/images/figure/server_quasi.png";
import launcherImg from "../assets/images/figure/launcher.png";
import server01Img from "../assets/images/background/server_01.png";
import ButtonFocus from "../components/buttonFocus/ButtonFocus";
import TextImg from "../components/textImg/TextImg";
import ImageZoomText from "../components/imageZoomText/ImageZoomText";
import Footer from "../components/footer/Footer";

export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.homeDiv}>

      <Head>
        <title>無名伺服器 | mcKismetLab</title>
      </Head>

      <TopBar />

      {/* block 01 */}
      <div className={styles.pageTop}>

        <div className={styles.frontVideo}>
          <video
            preload="auto"
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src="/video/front.mp4" type="video/mp4"></source>
          </video>
        </div>

        <div className={styles.pageTopLabelDiv}>
          <div className={styles.container}>
            <h1 className={styles.label}>無名伺服器</h1>
            <h1 className={styles.label}>探索生存</h1>
            <div className={styles.buttonDiv}>
              <ButtonFocus className={styles.buttonFocusDiscord} content="DISCORD" onClick={() => window.open("https://discord.com/invite/8BB3NY8")}></ButtonFocus>
              <ButtonFocus className={styles.buttonFocusLauncher} content="下載啟動器" onClick={() => router.push("/launcher")}></ButtonFocus>
            </div>
          </div>
        </div>

      </div>

      {/* block 02 */}
      <TextImg
        label="長期開服，服務不間斷"
        description="我們提供穩定的多人遊玩伺服器、社群討論區等等服務，不會突然無預警關服。"
        imgSrc={serverQuasiImg}
        imgDivWidth="50%"
      />

      {/* block 03 */}
      <TextImg
        label="自己開發，啟動器"
        description="我們開發的無名啟動器，給你方便快速啟動遊戲，無需自己安裝模組包、Java、自定義模組，就能馬上進來遊玩。"
        imgSrc={launcherImg}
        reverse={true}
        imgDivWidth="50%"
      />

      {/* block 04 */}
      <div className={styles.block04Server}>

        <h1 className={styles.label}>無名伺服器，現在正在開服中</h1>

        <div className={styles.discordAndIpButtonDiv}>
          <ButtonFocus className={styles.buttonFocusDiscord} content="DISCORD" onClick={() => window.open("https://discord.com/invite/8BB3NY8")}></ButtonFocus>
          <ButtonFocus className={styles.buttonFocusServerIp} content="play.mcKismetLab.net" onClick={() => navigator.clipboard.writeText("play.mcKismetLab.net")}></ButtonFocus>
        </div>

        <div className={styles.serverListDiv}>
          <ImageZoomText
            label="模組包伺服器"
            imgSrc={server01Img}
            onClick={() => router.push("/modServer")}
          />
        </div>

      </div>

      <Footer />

    </div>
  )
}
