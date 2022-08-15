import React from "react";
import styles from "../Home/homeStyles.module.scss";

function Layout({ leftSide, rightSide }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutLeft}>{leftSide}</div>
      <div className={styles.layoutRight}>{rightSide}</div>
    </div>
  );
}

export default Layout;
