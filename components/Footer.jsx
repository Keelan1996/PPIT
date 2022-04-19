import Image from "next/image";
import styles from "../styles/Footer.module.css";

// bottom footer information
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/game1.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Keelan and Adam's Game Store. 
          </h2>
          <p className={styles.text}>
           In our store we sale the retro and the newest games on the market! <br>
           </br>
           We aim to delivery our products in the best condition and the quickest of time.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR Stores</h1>
          <p className={styles.text}>
            Ballymena.
            <br /> Antrim
            <br /> (087) 122934
          </p>
          <p className={styles.text}>
            Derry city.
            <br /> Derry
            <br /> (074) 3934959
          </p>
          <p className={styles.text}>
            Omagh
            <br /> Tyrone
            <br /> (074) 9594493
          </p>
          <p className={styles.text}>
            Lifford
            <br /> Donegal
            <br /> (074) 9139494
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 1:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 3:00 – 9:00AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;