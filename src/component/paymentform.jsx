import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import './Style/form.css'

 export const Paymentform = () => {
  return  <>
  <Header />
 <div className='upper'>
 <p className='step'>STEP 3 OF 3</p>
     
     <h1 className='set'>Set up your credit or debit</h1>
     <h1 className='set2'>card</h1>
<img className='card' src="https://www.kindpng.com/picc/m/399-3995736_credit-card-payment-options-visa-mastercard-discover-logos.png" alt="" />
 </div>

 <form action="">
     <div>
        <input className='name' type="text" placeholder='First Name' />
     </div>
     <br />
     <div>
        <input className='name' type="text" placeholder='Last Name' />
     </div>
     <br />
     <div>
        <input className='name' type="text" placeholder='Expiry date(MM/YY)' />
     </div>
     <br />
     <div>
        <input className='name' type="text" placeholder='Security code(CVV)' />
     </div>

     <div className='pre'>
         <div className='inside'>
             <p className='month'>₹ P549/month</p>
             
          <p className='month2'>Basic Plan</p>
         </div>
         <div className='change'>Change</div>
     </div>
      <p className='any'>Any payment above ₹ 2000 shall need additional authentication.</p>
      <p className='by'>By checking the checkbox below, you agree to our Terms of Use, Privacy <br /> Statement, and that you are over 18. Netflix will automatically continue <br /> your membership and charge the membership fee (currently ₹ 199/month) <br /> to your payment method until you cancel. You may cancel at any time to <br /> avoid future charges.</p>
      <div className='check'>
      <input className='checkbox' type="checkbox" />
      <h4 className='agree'>I agree</h4>
      </div>
      <div className='start'>
         <h2 className='mem'>Start Membership</h2>
      </div>
 </form>
  <Footer />
  </>
     
  
 }
 