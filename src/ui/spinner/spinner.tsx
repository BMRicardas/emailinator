import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
    </div>
  );
}
