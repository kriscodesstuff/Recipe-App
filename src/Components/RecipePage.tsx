import React from "react";
import styles from "./scss/RecipePage.module.scss";

const RecipePage = ({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setStatus("home")}
        >
          <path
            d="M13.83 19C13.6806 19.0005 13.533 18.9675 13.398 18.9035C13.263 18.8395 13.1441 18.746 13.05 18.63L8.21998 12.63C8.0729 12.4511 7.99249 12.2266 7.99249 11.995C7.99249 11.7634 8.0729 11.5389 8.21998 11.36L13.22 5.36C13.3897 5.15578 13.6336 5.02736 13.8981 5.00298C14.1625 4.9786 14.4258 5.06026 14.63 5.23C14.8342 5.39974 14.9626 5.64365 14.987 5.90808C15.0114 6.1725 14.9297 6.43578 14.76 6.64L10.29 12L14.61 17.36C14.7323 17.5068 14.8099 17.6855 14.8338 17.8751C14.8577 18.0646 14.8268 18.257 14.7447 18.4296C14.6627 18.6021 14.5329 18.7475 14.3708 18.8486C14.2087 18.9497 14.021 19.0022 13.83 19Z"
            fill="#f35b04"
          />
        </svg>
        <img src="img/like-btn.svg" className={styles["like-btn"]} />
      </div>
      <div className={styles["recipe-img-container"]}>
        <img src="img/signup-bg.png" className={styles["recipe-img"]} />
      </div>
      <div className={styles["title-card"]}>
        <h1>Beef Burger</h1>
        <div className={styles["cal-serving"]}>
          <p className={styles.calories}>120 cal</p>
          <p className={styles.servings}>30 servings</p>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;