import Image from "next/image";

import { Container, SocialLogo } from "@/ui";

import ratepunk from "@/public/assets/logo.svg";
import instagram from "@/public/assets/instagram.svg";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import twitter from "@/public/assets/twitter.svg";
import tiktok from "@/public/assets/tiktok.svg";
import emailFooter from "@/public/assets/email-footer.svg";

import styles from "./footer.module.scss";

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

const socialLogos = [
  {
    link: "https://www.instagram.com/ratepunk/",
    src: instagram,
    alt: "Instagram logo",
  },
  {
    link: "https://www.facebook.com/r8punk/",
    src: facebook,
    alt: "Facebook logo",
  },
  {
    link: "https://www.linkedin.com/company/ratepunk/",
    src: linkedin,
    alt: "Linkedin logo",
  },
  {
    link: "https://twitter.com/rate_punk",
    src: twitter,
    alt: "Twitter logo",
  },
  {
    link: "https://www.tiktok.com/@ryanthetravelguy?lang=en",
    src: tiktok,
    alt: "Tiktok logo",
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.about}>
            <Image src={ratepunk} alt="Ratepunk logo" className={styles.logo} />
            <p>
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you&#8217;re getting the best deal!
            </p>
          </div>
          <div className={styles.links}>
            <div>
              <h3 className={styles.footerTitle}>quick links</h3>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label} className={styles.quickLink}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.contacts}>
              <div>
                <h3 className={styles.footerTitle}>contact</h3>
                <div className={styles.emailContainer}>
                  <Image src={emailFooter} alt="email icon" />
                  <a href="mailto:hi@ratepunk.com" className={styles.email}>
                    hi@ratepunk.com
                  </a>
                </div>
              </div>
              <div>
                <h3 className={styles.footerTitle}>social</h3>
                <ul className={styles.socialLinksContainer}>
                  {socialLogos.map((logo) => (
                    <li key={logo.link}>
                      <SocialLogo {...logo} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            &#169; {currentYear} Ratepunk. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
