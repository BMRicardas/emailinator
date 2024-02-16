import Image from "next/image";

import { TODO } from "@/types";

import styles from "./store.module.scss";

interface Props {
  logo: { src: TODO; alt: string };
  storeLink: string;
  storeName: string;
}

export function Store({ logo, storeLink, storeName }: Props) {
  return (
    <a
      href={storeLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.store}>
      <Image src={logo.src} alt={logo.alt} />
      <div>
        <p className={styles.available}>available in the</p>
        <p className={styles.storeName}>{storeName}</p>
      </div>
    </a>
  );
}
