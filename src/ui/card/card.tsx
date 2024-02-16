import { ReactNode } from "react";

import styles from "./card.module.scss";

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
