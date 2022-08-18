import styles from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/cesar.jpg"
          alt="An image showing Cesar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Cesar</h1>
      <p>
        I Blog about web developpement - especialy frontend frameworks like
        React or Vue
      </p>
    </section>
  );
}

export default Hero;
