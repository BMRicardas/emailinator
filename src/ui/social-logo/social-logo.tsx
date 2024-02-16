import Image from "next/image";

import { TODO } from "@/types";

import styles from "./social-logo.module.scss";

interface Props {
  link: string;
  src: TODO;
  alt: string;
}

export function SocialLogo({ link, src, alt }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.logoBox}>
      <Image src={src} alt={alt} className={styles.logo} />
    </a>
  );
}