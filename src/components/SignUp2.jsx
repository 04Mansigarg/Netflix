import React from "react";
import styles from "../css/SignUp2.module.css";
import { useNavigate } from "react-router-dom";

const SignUp2 = () => {
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

export default SignUp2;
