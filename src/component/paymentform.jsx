import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import styles from "../component/Style/form.module.css"

export const Paymentform = () => {
   return <>
      <Header />
      <div className={styles.upper}>
         <p className={styles.step}>STEP 3 OF 3</p>

         <h1 className={styles.set}>Set up your credit or debit</h1>
         <h1 className={styles.set2}>card</h1>
         <img className={styles.card} src="https://www.kindpng.com/picc/m/399-3995736_credit-card-payment-options-visa-mastercard-discover-logos.png" alt="" />
      </div>

      <form action="">
         <div>
            <input className={styles.name} type="text" placeholder='First Name' />
         </div>
         <br />
         <div>
            <input className={styles.name} type="text" placeholder='Last Name' />
         </div>
         <br />
         <div>
            <input className={styles.name} type="text" placeholder='Expiry date(MM/YY)' />
         </div>
         <br />
         <div>
            <input className={styles.name} type="text" placeholder='Security code(CVV)' />
         </div>

         <div className={styles.pre}>
            <div className={styles.inside}>
               <p className={styles.month}>₹ P549/month</p>

               <p className={styles.month2}>Basic Plan</p>
            </div>
            <div className={styles.change}>Change</div>
         </div>
         <p className={styles.any}>Any payment above ₹ 2000 shall need additional authentication.</p>
         <p className={styles.by}>By checking the checkbox below, you agree to our Terms of Use, Privacy <br /> Statement, and that you are over 18. Netflix will automatically continue <br /> your membership and charge the membership fee (currently ₹ 199/month) <br /> to your payment method until you cancel. You may cancel at any time to <br /> avoid future charges.</p>
         <div className={styles.check}>
            <input className={styles.checkbox} type="checkbox" />
            <h4 className={styles.agree}>I agree</h4>
         </div>
         <div className={styles.start}>
            <h2 className={styles.mem}>Start Membership</h2>
         </div>
      </form>
      <Footer />
   </>


}
