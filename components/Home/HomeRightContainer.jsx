import React from "react";
import styles from "./homeStyles.module.scss";

function HomeRightContainer() {
  const dayList = [
    {
      day: "Sunday",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "Monday",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "Tuesday",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "Wednesday",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "Thursday",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "Friday",
      time: "09:00 AM - 05:00 PM",
    },
    {
      day: "Saturday",
      time: "holiday",
    },
  ];

  return (
    <div className={styles.rightContainer}>
      {/* business Details */}
      <div className={`${styles.businessDetailsContainer} componentContainer`}>
        <p className={styles.ourSrviceTxt}>Business hours</p>

        {dayList.map((value, index) => (
          <div key={index} className={styles.dayContainer}>
            <p className={styles.dayTxt}>{value.day}</p>
            <p className={styles.dayTxt}>{value.time}</p>
          </div>
        ))}
      </div>

      {/* Call */}
      <div className={`${styles.callContainer} componentContainer`}>
        <p className={styles.ourSrviceTxt}>Call</p>
        <p className={styles.dayTxt}>0484-22334455</p>
      </div>

      {/* Map */}
      <div className={`${styles.mapContainer} componentContainer`}>
        <img src="/Map.png" className={styles.mapImg} alt="map" />
      </div>
    </div>
  );
}

export default HomeRightContainer;
