import React from 'react'
import { DocuseriesTvShows } from '../HomePage/DocuseriesTvShows'
import { HorrorTvShows } from '../HomePage/HorrorTvShows'
import { IndianTvShows } from '../HomePage/IndianTvShows'
import { MainFooter } from '../HomePage/MainFooter'
import { RomanceTvShows } from '../HomePage/RomanceTvShows'
import { AllTvShows } from './AllTvShows'
import styles from "../HomePage/HomePage.module.css"

export const TvShows = () => {
    return (
        <div className={styles.tvShows}>
            <AllTvShows />
            <DocuseriesTvShows />
            <RomanceTvShows />
            <IndianTvShows />
            <HorrorTvShows />
            <MainFooter />
        </div>
    )
}
