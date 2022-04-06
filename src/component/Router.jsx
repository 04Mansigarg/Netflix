import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Payment } from './payment'
import { Paymentform } from './paymentform'

const Router = () => {
  return (
    <Routes>
    <Route exact path='/' element={<Payment />}  />
            <Route exact path='/paymentform' element={<Paymentform />}  />
    </Routes>
  )
}

export default Router