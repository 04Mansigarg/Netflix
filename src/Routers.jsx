import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage/LandingPage'

export const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
    )
}
