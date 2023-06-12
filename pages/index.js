import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import LuanCityFestival from "../public/luancity.jpg";
import Voo from "../public/voo.png";
import ReactPlayer from "react-player";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Feliz dia dos namorados!</title>
        <meta name="description" content="Feliz dia dos namorados!" />
        <link rel="icon" href="/heart.ico" />
      </Head>

      <main className={styles.main}>
        {show ? (
          <div className={styles.secondDiv}>
            <h1 className={styles.title}>
              Vamos para o Luan City Festival em Curitiba!
            </h1>
            <div>
              <Image alt="voo" src={Voo} width={360} height={300} />
              <Image
                alt="luan-city-festival"
                src={LuanCityFestival}
                width={360}
                height={200}
              />
            </div>
            <h2>
              Esse presente foi muito pensado em você, mas eu to muito feliz em tá realizando isso contigo, meu amor ❤️
            </h2>
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=JwNmNoWrz70&ab_channel=LuanSantana"
              }
              playing={true}
              width={360}
              height={300}
            />
          </div>
        ) : (
          <div className={styles.mainDiv}>
            <h1 className={styles.title}>
              Feliz dia dos namorados
              <br />
              Minha eterna namorada
              <br />
              ❤️
            </h1>
            <button
              className={styles["gift-button"]}
              onClick={() => setShow(true)}
            >
              Clique aqui para abrir seu presente!
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
