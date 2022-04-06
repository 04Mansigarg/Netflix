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

        <div className={styles.big}>

            <Header />
            <div className={styles.box2}>
                <img className={styles.image2} src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png" alt="" />
                <h5>STEP 3 OF 3</h5>
                <h1>Choose how to pay</h1>
                <p>Your payment is</p>
                <p>encrypted and you can</p>
                <p>change how you pay</p>
                <p>anytime.</p>
                <br />

                <h3>Secure for peace of</h3>
                <h3 className={styles.mind}>mind.</h3>
                <h3>Cancel easily online.</h3>
            </div>
            <div>
                <div className={styles.end}>
                    <p className={styles.enr}>End-to-end encrypted</p>
                    <img className={styles.image3} src="https://www.clipartmax.com/png/middle/90-909007_lock-clipart-png.png" alt="" />
                </div>



                <div onClick={() => {
                    payment()
                }} className={styles.pay1}>
                    <h3 className={styles.credit}>Credit Card or Debit Card</h3>
                    <img className={styles.image4} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a5xFXYlgFN1hbwJPC9e6ByfvvmQESJssH3C4OAxR_7zvW0ZUeSeqe0-EqV3PxrhBKg&usqp=CAU" alt="" />
                    <img className={styles.great} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9zj9NTpOb3oK0e9v0nR77Vv1Ml26OQqnYB7kZZhvq5SQsrPgqDX-tU0LZy7vIkDjDec&usqp=CAU" alt="" />
                </div>
                <div onClick={() => {
                    payment()
                }} className={styles.pay2}>
                    <h3 className={styles.credit}>UPI AutoPay</h3>
                    <img className={styles.image4} src="https://www.iprotect.net.in/wp-content/uploads/2020/11/downloadd-1024x141.png" alt="" />
                    <img className={styles.great} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9zj9NTpOb3oK0e9v0nR77Vv1Ml26OQqnYB7kZZhvq5SQsrPgqDX-tU0LZy7vIkDjDec&usqp=CAU" alt="" />
                </div>


            </div>


            <Footer />
        </div>)


}