
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage/LandingPage'
import { Payment } from "./component/payment"
import { Paymentform } from "./component/paymentform"
import SignUp1 from "./components/SignUp1"
import SignUp2 from "./components/SignUp2"
import SignUp3 from "./components/SignUp3"
import Login from "./components/Login"

export const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="signup1" element={<SignUp1 />} />
                <Route path="signup2" element={<SignUp2 />} />
                <Route path="signup3" element={<SignUp3 />} />
                <Route path="login" element={<Login />} />
                <Route exact path='/payment' element={<Payment />} />
                <Route exact path='/paymentform' element={<Paymentform />} />
            </Routes>
        </div>
    )
}