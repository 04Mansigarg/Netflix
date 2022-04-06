import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import styles from "../component/Style/payment.module.css"

export const Payment = () => {
    const navigate = useNavigate()

    const payment = () => {
        navigate('/paymentform')

    }


    return (

        <div className={styles.paymentbig}>

            <Header />
            <div className={styles.paymentbox2}>
                <img className={styles.paymentimage2} src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png" alt="" />
                <h5>STEP 3 OF 3</h5>
                <h1>Choose how to pay</h1>
                <p>Your payment is</p>
                <p>encrypted and you can</p>
                <p>change how you pay</p>
                <p>anytime.</p>
                <br />

                <h3>Secure for peace of</h3>
                <h3 className={styles.paymentmind}>mind.</h3>
                <h3>Cancel easily online.</h3>
            </div>
            <div>
                <div className={styles.paymentend}>
                    <p className={styles.paymentenr}>End-to-end encrypted</p>
                    <img className={styles.paymentimage3} src="https://www.clipartmax.com/png/middle/90-909007_lock-clipart-png.png" alt="" />
                </div>



                <div onClick={() => {
                    payment()
                }} className={styles.paymentpay1}>
                    <h3 className={styles.paymentcredit}>Credit Card or Debit Card</h3>
                    <img className={styles.paymentimage4} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a5xFXYlgFN1hbwJPC9e6ByfvvmQESJssH3C4OAxR_7zvW0ZUeSeqe0-EqV3PxrhBKg&usqp=CAU" alt="" />
                    <img className={styles.paymentgreat} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9zj9NTpOb3oK0e9v0nR77Vv1Ml26OQqnYB7kZZhvq5SQsrPgqDX-tU0LZy7vIkDjDec&usqp=CAU" alt="" />
                </div>
                <div onClick={() => {
                    payment()
                }} className={styles.paymentpay2}>
                    <h3 className={styles.paymentcredit}>UPI AutoPay</h3>
                    <img className={styles.paymentimage4} src="https://www.iprotect.net.in/wp-content/uploads/2020/11/downloadd-1024x141.png" alt="" />
                    <img className={styles.paymentgreat} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9zj9NTpOb3oK0e9v0nR77Vv1Ml26OQqnYB7kZZhvq5SQsrPgqDX-tU0LZy7vIkDjDec&usqp=CAU" alt="" />
                </div>


            </div>


            <Footer />
        </div>)


}