import Image from "next/image";

import { TODO } from "@/types";

import styles from "./social-logo.module.scss";

interface Props {
  src: TODO;
  alt: string;
}

export function SocialLogo({ src, alt }: Props) {
  return (
    <div className={styles.socialLogoBox}>
      <Image src={src} alt={alt} width={16} height={16} />
    </div>
  );
}
