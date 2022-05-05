import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import styles from "../component/Style/form.module.css";
import { FooterComp } from "../components/FooterComp";
import { useSelector } from "react-redux";

export const Paymentform = () => {
   const email = useSelector((state => state.email))
   const password = useSelector((state => state.password))
   const initState = {
      name: "",
      lastName: "",
      email: email,
      password: password,
      cardNo: "",
      expiryDate: "",
      cvv: "",

   }
   const [formData, setFormData] = React.useState(initState)
   const navigate = useNavigate();
   const handleChange = (e) => {
      let { name, value } = e.currentTarget
      setFormData({
         ...formData,
         [name]: value
      })

   }
   const handleSubmit = (e) => {
      e.preventDefault()
      if (formData.name === "" || formData.lastName === "" || formData.cvv === "" || formData.cardNo === "" || formData.expiryDate === "") {
         alert("Fill all Credential")
      }

      fetch("http://localhost:8000/users/register", {
         method: "POST",
         body: JSON.stringify(formData),
         headers: { "content-type": "application/json" }
      })
         .then((res) => res.json())
         .then((res) => {
            JSON.stringify(res)
            setFormData(initState)
            if (res.token) navigate("/login")

         })
         .catch((err) => console.log(err))

   }



   return (
      <>
         <Header />
         <div className={styles.middlebox}>
            <p>STEP 3 OF 3</p>
            <h2>Set up your credit or debit card</h2>
            <img src="/cardss.png" alt="" />
            <form action="" onSubmit={handleSubmit}>
               <input type="text" placeholder="First Name" name="name" value={formData.name} onChange={handleChange} />
               <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
               <input type="text" placeholder="Card Number" name="cardNo" value={formData.cardNo} onChange={handleChange} />
               <input type="text" placeholder="Expiration Date (MM/YY)" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
               <input type="text" placeholder="Security Code (CVV)" name="cvv" value={formData.cvv} onChange={handleChange} />
               <div className={styles.plandetails}>
                  <span>
                     <p className={styles.price}>₹ 199/month</p>
                     <p>Basic Plan</p>
                  </span>
                  <span className={styles.changebtn}>
                     <a href="/paymentform">Change</a>
                  </span>
               </div>
               <p className={styles.disclaimer}>
                  Any payment above ₹ 2000 shall need additional authentication.
               </p>
               <p className={styles.disclaimer}>
                  By checking the checkbox below, you agree to our{" "}
                  <a href="/paymentform">Terms of Use</a>, <a href="/paymentform">Privacy Statement</a>, and
                  that you are over 18. Netflix will automatically continue your
                  membership and charge the membership fee (currently ₹ 199/month) to
                  your payment method until you cancel. You may cancel at any time to
                  avoid future charges.
               </p>
               <div className={styles.checkbox}>
                  <input type="checkbox" />
                  <p style={{ "margin-top": 18 }}>I agree.</p>
               </div>

               <input type="submit" className={styles.membtn} value=" Start Membership" />

            </form>
         </div>
         <FooterComp />
      </>
   );
};
