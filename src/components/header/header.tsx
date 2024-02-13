import Image from "next/image";

import ratepunk from "@/public/assets/logo.svg";

import styles from "./header.module.scss";

interface Props {}

const headerLinks = [
  {
    label: "Chrome Extension",
    href: "",
  },
  {
    label: "Price Comparison",
    href: "",
  },
  {
    label: "Blog",
    href: "",
  },
];

export function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Image src={ratepunk} alt="Ratepunk logo" className={styles.logo} />
      <ul className={styles.headerLinks}>
        {headerLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
