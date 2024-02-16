"use client";

import { useState } from "react";
import Image from "next/image";

import { useLockedBody } from "@/utils/hooks/use-locked-body";

import { Container } from "@/ui";

import ratepunk from "@/public/assets/logo.svg";
import menu from "@/public/assets/menu.svg";
import close from "@/public/assets/close.svg";

import styles from "./mobile-header.module.scss";

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

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLockedBody(isMenuOpen);

  return (
    <header className={styles.container}>
      <Container>
        <nav className={styles.mobileHeader}>
          <a href="/">
            <Image src={ratepunk} alt="Ratepunk logo" className={styles.logo} />
          </a>
          <button
            type="button"
            id="menu-button"
            aria-label="menu"
            aria-haspopup="true"
            aria-controls="menu-nav"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            className={styles.button}>
            {isMenuOpen ? (
              <Image src={close} alt="Close menu" />
            ) : (
              <Image src={menu} alt="Open menu" />
            )}
          </button>
        </nav>
        <ul
          id="menu-nav"
          aria-labelledby="menu-button"
          aria-hidden={!isMenuOpen}
          className={styles.menuLinks}>
          {headerLinks.map((link) => (
            <li key={link.label} className={styles.link}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
