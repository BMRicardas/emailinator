import React from "react";
import Image from "next/image";

import ratepunk from "@/public/assets/logo.svg";
import instagram from "@/public/assets/instagram.svg";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import twitter from "@/public/assets/twitter.svg";
import tiktok from "@/public/assets/tiktok.svg";

import styles from "./footer.module.scss";
import { SocialLogo } from "@/ui";

interface Props {}

const quickLinks = [
  {
    href: "",
    label: "Price Comparison",
  },
  {
    href: "",
    label: "Chrome Extension",
  },
  {
    href: "",
    label: "How It Works",
  },
  {
    href: "",
    label: "Ratepunk Blog",
  },
  {
    href: "",
    label: "Privacy Policy",
  },
];

export function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <Image src={ratepunk} alt="Ratepunk logo" className={styles.logo} />
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you&#8217;re getting the best deal!
        </p>
      </div>
      <div className={styles.links}>
        <div>
          <h3 className={styles.footerTitle}>QUICK LINKS</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label} className={styles.quickLink}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contacts}>
          <div>
            <h3 className={styles.footerTitle}>CONTACT</h3>
            <a href="mailto:hi@ratepunk.com" className={styles.email}>
              hi@ratepunk.com
            </a>
          </div>
          <div>
            <h3 className={styles.footerTitle}>SOCIAL</h3>
            <div className={styles.socialLinksContainer}>
              <SocialLogo src={instagram} alt="Instagram logo" />
              <SocialLogo src={facebook} alt="Facebook logo" />
              <SocialLogo src={linkedin} alt="Linkedin logo" />
              <SocialLogo src={twitter} alt="Twitter logo" />
              <SocialLogo src={tiktok} alt="Tiktok logo" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &#169; {currentYear} Ratepunk. All Rights Reserved.
      </div>
      {/* <div>
        <Image src={ratepunk} alt="Ratepunk logo" />
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you&#8217;re getting the best deal!
        </p>
        <p>&#169; {currentYear} Ratepunk. All Rights Reserved.</p>
      </div>
      <div>
        <div>
          <h3>QUICK LINKS</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="">Price Comparison</a>
          <a href="">Chrome Extension</a>
          <a href="">How It Works</a>
          <a href="">Ratepunk Blog</a>
          <a href="">Privacy Policy</a>
        </div>
        <div>
          <div>
            <h3>CONTACT</h3>
            <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
          </div>
          <div>
            <h3>SOCIAL</h3>
            <div className={styles.socialLinksContainer}>
              <SocialLogo src={instagram} alt="Instagram logo" />
              <SocialLogo src={facebook} alt="Facebook logo" />
              <SocialLogo src={linkedin} alt="Linkedin logo" />
              <SocialLogo src={twitter} alt="Twitter logo" />
              <SocialLogo src={tiktok} alt="Tiktok logo" />
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
