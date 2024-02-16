import { Store } from "./store";
import { Container, Rating } from "@/ui";

import chrome from "@/public/assets/chrome.svg";
import apple from "@/public/assets/apple.svg";

import styles from "./stores.module.scss";

const stores = [
  {
    logo: {
      src: chrome,
      alt: "Chrome web store logo",
    },
    link: "https://chromewebstore.google.com/detail/ratepunk-hotel-booking-an/gdaioanblcnghddimngklkhgcbomfdck",
    name: "chrome web store",
  },
  {
    logo: {
      src: apple,
      alt: "Apple app store logo",
    },
    link: "https://apps.apple.com/app/ratepunk/id1607823726",
    name: "apple app store",
  },
];

export function Stores({}) {
  return (
    <section className={styles.storesContainer}>
      <Container>
        <div className={styles.stores}>
          <ul className={styles.storesList}>
            {stores.map((store) => (
              <li key={store.name}>
                <Store
                  logo={store.logo}
                  storeName={store.name}
                  storeLink={store.link}
                />
              </li>
            ))}
          </ul>
          <Rating />
        </div>
      </Container>
    </section>
  );
}
