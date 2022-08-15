import Image from "next/image";
import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-scroll";
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
        <span>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Services
          </Link>
        </span>
        <span>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            About us
          </Link>
        </span>
        <span>
          <Link
            to="blogs"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Updates
          </Link>
        </span>
        <span>
          <Link
            to="staffs"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Staffs
          </Link>
        </span>
        <span>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Gallery
          </Link>
        </span>
      </div>

      <Layout
        leftSide={<HomeLeftContainer />}
        rightSide={<HomeRightContainer />}
      />
    </div>
  );
};

export default Home;
