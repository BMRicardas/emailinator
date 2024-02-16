import Image from "next/image";
import star from "@/public/assets/star.svg";

import styles from "./rating.module.scss";

export function Rating({}) {
  return (
    <div className={styles.container}>
      <div className={styles.ratingStars}>
        <Image src={star} alt="Rating star" className={styles.image} />
        <Image src={star} alt="Rating star" className={styles.image} />
        <Image src={star} alt="Rating star" className={styles.image} />
        <Image src={star} alt="Rating star" className={styles.image} />
        <Image src={star} alt="Rating star" className={styles.image} />
      </div>
      <p className={styles.text}>Chrome Store reviews</p>
    </div>
  );
}
