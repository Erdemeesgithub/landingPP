import styles from "../styles/components/Landing.module.css";
import React, { useState } from "react";

export const Landing = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.header}>
        <div></div>
      </div>
      <div className={styles.postPage1}></div>
      <div className={styles.postPage2}></div>
      <div className={styles.postPage3}></div>
      <div className={styles.aboutUs}></div>
      <div className={styles.footer}></div>
    </div>
  );
};
