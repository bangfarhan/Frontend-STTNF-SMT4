import styles from "./Hero.module.css";
import rumahsakit from "../../assets/rumahsakit.png";
function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid Indonesia</h2>
          <span className={styles.hero__genre}>
            Monitoring Perkembangan Covid
          </span>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Vaksin</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={rumahsakit}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;