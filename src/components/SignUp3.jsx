import React from "react";
import styles from "../css/SignUp3.module.css";
import { FooterComp } from "./FooterComp";

const SignUp3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" />
        </div>
        <a href="">Sign Out</a>
      </div>
      <div className={styles.middlebox}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"
          alt=""
        />
        <p>STEP 2 OF 3</p>
        <h2>Choose your plan.</h2>
        <ul>
          <li>No commitments, cancel anytime.</li>
          <li>Everything on Netflix for one low price.</li>
          <li>No ads and no extra fees. Ever.</li>
        </ul>
        <button>Next</button>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUp3;
