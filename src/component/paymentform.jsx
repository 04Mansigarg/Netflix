import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../component/Style/form.module.css";
import { FooterComp } from "../components/FooterComp";

export const Paymentform = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/homepage");
  };
  return (
    <>
      {/* <Header /> */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </a>
        </div>
        <a className={styles.signbtn} href="/">
          Sign Out
        </a>
      </div>
      <div className={styles.middlebox}>
        <p>STEP 3 OF 3</p>
        <h2>Set up your credit or debit card</h2>
        <img src="/cardss.png" alt="" />
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiration Date (MM/YY)" />
          <input type="text" placeholder="Security Code (CVV)" />
          <div className={styles.plandetails}>
            <span>
              <p className={styles.price}>₹ 199/month</p>
              <p>Basic Plan</p>
            </span>
            <span className={styles.changebtn}>
              <a href="">Change</a>
            </span>
          </div>
          <p className={styles.disclaimer}>
            Any payment above ₹ 2000 shall need additional authentication.
          </p>
          <p className={styles.disclaimer}>
            By checking the checkbox below, you agree to our{" "}
            <a href="">Terms of Use</a>, <a href="">Privacy Statement</a>, and
            that you are over 18. Netflix will automatically continue your
            membership and charge the membership fee (currently ₹ 199/month) to
            your payment method until you cancel. You may cancel at any time to
            avoid future charges.
          </p>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p style={{ "margin-top": 18 }}>I agree.</p>
          </div>

          <button className={styles.membtn} onClick={() => home()}>
            Start Membership
          </button>
        </form>
      </div>
      <FooterComp />
    </>
  );
};
