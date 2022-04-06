import React from "react";
import styles from "../css/SignUp2.module.css";
import { useNavigate } from "react-router-dom";
import { FooterComp } from "./FooterComp";

const SignUp2 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" />
        </div>
        <a href="/">Sign In</a>
      </div>
      <div className={styles.middlebox}>
        <p>STEP 1 OF 3</p>
        <h2>Create a password to start your membership</h2>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Add a password" />
          <button
            onClick={() => {
              navigate("/signup3");
            }}
          >
            Next
          </button>
        </form>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUp2;
