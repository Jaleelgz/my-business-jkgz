import Image from "next/image";
import React from "react";
import Layout from "../Layout/Layout";
import HomeLeftContainer from "./HomeLeftContainer";
import HomeRightContainer from "./HomeRightContainer";
import styles from "./homeStyles.module.scss";

const Home = () => {
  return (
    <div className={`${styles.homeContainer} ${styles.border}`}>
      <img
        src={"/bannerImg.jpg"}
        className={`${styles.bannerImage}`}
        alt="banner"
      />

      <div className={styles.bannerContainer} style={{ zIndex: 100 }}>
        <span>Services</span>
        <span>About us</span>
        <span>Updates</span>
        <span>Staffs</span>
        <span>Gallery</span>
      </div>

      <Layout
        leftSide={<HomeLeftContainer />}
        rightSide={<HomeRightContainer />}
      />
    </div>
  );
};

export default Home;
