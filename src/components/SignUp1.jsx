import React from "react";
import styles from "../css/SignUp1.module.css";
import { useNavigate } from "react-router-dom";

const SignUp1 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" />
        </div>
        <a href="">Sign In</a>
      </div>
      <div className={styles.middlebox}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          alt=""
        />
        <p>STEP 1 OF 3</p>
        <h2>Finish setting up your account</h2>
        <p>
          Netflix is personalised for you. Create a password to watch on any
          device at any time.
        </p>
        <button
          onClick={() => {
            navigate("/signup2");
          }}
        >
          Next
        </button>
      </div>
      <div className={styles.footer}>
        <p>Questions? Call 000-800-040-1843</p>
        <div className={styles.links}>
          <div>
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div>
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div>
            <p>Terms of Use</p>
          </div>
          <div>
            <p>Privacy</p>
          </div>
        </div>
        <select name="" id="">
          <option value="">English</option>
          <option value="">हिन्दी </option>
        </select>
      </div>
    </div>
  );
};

export default SignUp1;
