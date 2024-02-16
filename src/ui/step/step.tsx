import Image from "next/image";

import { TODO } from "@/types";

import styles from "./step.module.scss";

interface Props {
  index: number;
  imageSrc: TODO;
  header: string;
  description: string;
}

export function Step({ index, imageSrc, header, description }: Props) {
  const stepNumber = index + 1;

  return (
    <div className={styles.step}>
      <Image
        src={imageSrc}
        alt="Step Illustration"
        className={styles.ilustration}
      />
      <div>
        <div className={styles.stepNumber}>step {stepNumber}</div>
        <h2 className={styles.stepHeader}>{header}</h2>
        <p className={styles.stepDescription}>{description}</p>
      </div>
    </div>
  );
}
