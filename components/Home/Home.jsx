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
            activeClass={styles.active}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </span>
        <span>
          <Link
            to="about"
            activeClass={styles.active}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About us
          </Link>
        </span>
        <span>
          <Link
            to="blogs"
            activeClass={styles.active}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Updates
          </Link>
        </span>
        <span>
          <Link
            to="staffs"
            activeClass={styles.active}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Staffs
          </Link>
        </span>
        <span>
          <Link
            to="gallery"
            activeClass={styles.active}
            spy={true}
            smooth={true}
            offset={-100}
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
