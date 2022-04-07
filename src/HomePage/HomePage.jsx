import React from 'react'
import { IndianTvShows } from './IndianTvShows'
import styles from "./HomePage.module.css"
import { HorrorTvShows } from './HorrorTvShows'
import { RomanceTvShows } from './RomanceTvShows'
import { DocuseriesTvShows } from './DocuseriesTvShows'
import { Anime } from './Anime'
import { Bollywood } from './Bollywood'
import { Hollywood } from './Hollywood'
import { AwardWinning } from './AwardWinning'
import { MainFooter } from './MainFooter'

export const HomePage = () => {
    return (
        <div className={styles.home}>
            <IndianTvShows />
            <HorrorTvShows />
            <RomanceTvShows />
            <DocuseriesTvShows />
            <Anime />
            <AwardWinning />
            <Bollywood />
            <Hollywood />

            <MainFooter />


        </div>
    )
}