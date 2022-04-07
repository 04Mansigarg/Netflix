import React from 'react'
import { Anime } from '../HomePage/Anime'
import { AwardWinning } from '../HomePage/AwardWinning'
import { Bollywood } from '../HomePage/Bollywood'
import { Hollywood } from '../HomePage/Hollywood'
import { AllMovies } from './AllMovies'
import styles from "../HomePage/HomePage.module.css"
import { MainFooter } from '../HomePage/MainFooter'

export const Movies = () => {
    return (
        <div className={styles.tvShows}>
            <AllMovies />
            <AwardWinning />
            <Hollywood />
            <Bollywood />
            <Anime />
            <MainFooter />
        </div>
    )
}
