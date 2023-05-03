import styles from "./cloud.module.css";

export default function Cloud() {
  return (
    <div className={styles.hoverOpacity + " mt-2"}>
      <div className={styles.blurCircle} data-v-1090a973></div>
      <div className={styles.blurCircle} data-v-1090a973></div>
      <div className={styles.blurCircle} data-v-1090a973></div>
      <div className={styles.blurCircle} data-v-1090a973></div>
    </div>
  );
}
