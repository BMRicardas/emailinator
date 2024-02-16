import Image from "next/image";

import { Container } from "@/ui";

import ratepunk from "@/public/assets/logo.svg";

import styles from "./header.module.scss";

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

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Container>
        <nav className={styles.header}>
          <a href="/">
            <Image src={ratepunk} alt="Ratepunk logo" className={styles.logo} />
          </a>
          <ul className={styles.headerLinks}>
            {headerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
