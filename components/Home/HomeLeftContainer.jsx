import React from "react";
import styles from "./homeStyles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

function HomeLeftContainer() {
  return (
    <div className={styles.leftContainer}>
      {/* service container */}
      <div
        className={`${styles.serviceContainer} componentContainer`}
        id="services"
      >
        <p className={styles.ourSrviceTxt}>Our services</p>
        <p className={styles.selectServTxt}>Select your service</p>
        <div className={styles.accordionContainer}>
          <div className={styles.accordionHead}>
            <p className={styles.categoryName}>Hair Cuts</p>
            <IoIosArrowDown color="#000" size={20} />
          </div>

          {[...Array(10)].map((value, index) => (
            <div key={index} className={styles.serviceItemContainer}>
              <img
                src="/service.png"
                alt="service"
                className={styles.serviceImg}
              />
              <div className={styles.serviceTxtContainer}>
                <p className={styles.serviceNameTxt}>Hair cut mail</p>
                <p className={styles.serviceDuration}>30 minutes, Rs 300</p>
                <p className={styles.serviceDescription}>
                  Hair wash and Massage included
                </p>
              </div>
              <button>Add +</button>
            </div>
          ))}
        </div>
      </div>

      {/* About Us */}
      <div
        className={`${styles.aboutUsContainer} componentContainer`}
        id="about"
      >
        <p className={styles.ourSrviceTxt}>About Us</p>
        <p className={styles.welcomeTxt}>Welcome to Ozan</p>
        <p className={styles.description}>
          Hairdressing salon for men and boys - hairdressing environment for
          hairstyles, beards / mustaches. We will do our best to get you back,
          every time you need a haircut.{" "}
        </p>
      </div>

      {/* Blogs */}
      <div className={`${styles.blogsContainer} componentContainer`} id="blogs">
        <div className={styles.headContainer}>
          <p className={styles.ourSrviceTxt}>Blogs</p>
          <p className={styles.latestNewsTxt}>Latest news and offers</p>
        </div>

        {[...Array(3)].map((value, index) => (
          <div key={index} className={styles.blogItemContainer}>
            <img src="/service.png" alt="service" className={styles.blogImg} />
            <div className={styles.blogTxtContainer}>
              <p className={styles.blogNameTxt}>Blog 1</p>
              <p className={styles.blogDescription}>
                Content of the news/offer from the business. On click it
                explands
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Our staffs */}
      <div
        className={`${styles.ourStaffsContainer} componentContainer`}
        id="staffs"
      >
        <p className={styles.ourSrviceTxt}>Our staffs</p>
        {/* <p className={styles.welcomeTxt}>Welcome to Ozan</p> */}
        <div className={styles.staffsCardContainer}>
          {[...Array(15)].map((value, index) => (
            <div key={index} className={styles.staffItemContainer}>
              <img
                src="/service.png"
                alt="service"
                className={styles.staffImg}
              />
              <p className={styles.staffName}>Staff Name</p>
              <p className={styles.staffAbout}>About</p>
            </div>
          ))}
        </div>
      </div>

      {/* PortFolio */}
      <div
        className={`${styles.portFolioContainer} componentContainer`}
        id="gallery"
      >
        <p className={styles.ourSrviceTxt}>Portfolio</p>
        {/* <p className={styles.welcomeTxt}>Welcome to Ozan</p> */}
        <div className={styles.imageParentContainer}>
          {[...Array(15)].map((value, index) => (
            <div key={index} className={styles.imageItemContainer}>
              <img
                src="/service.png"
                alt="service"
                className={styles.galleryImg}
              />
            </div>
          ))}
        </div>
      </div>

      {/* WorkPlace */}
      <div className={`${styles.portFolioContainer} componentContainer`}>
        <p className={styles.ourSrviceTxt}>Work place photo</p>
        {/* <p className={styles.welcomeTxt}>Welcome to Ozan</p> */}
        <div className={styles.imageParentContainer}>
          {[...Array(15)].map((value, index) => (
            <div key={index} className={styles.imageItemContainer}>
              <img
                src="/service.png"
                alt="service"
                className={styles.galleryImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeLeftContainer;
