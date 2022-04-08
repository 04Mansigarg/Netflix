import React from 'react'
import { DocuseriesTvShows } from '../HomePage/DocuseriesTvShows'
import { HorrorTvShows } from '../HomePage/HorrorTvShows'
import { IndianTvShows } from '../HomePage/IndianTvShows'
import { MainFooter } from '../HomePage/MainFooter'
import { RomanceTvShows } from '../HomePage/RomanceTvShows'
import { AllTvShows } from './AllTvShows'
import styles from "../HomePage/HomePage.module.css"
import { Banner } from '../HomePage/Banner'

export const TvShows = () => {
    return (
        <div className={styles.tvShows}>
            <Banner />
            <AllTvShows />
            <DocuseriesTvShows />
            <RomanceTvShows />
            <IndianTvShows />
            <HorrorTvShows />
            <MainFooter />
        </div>
    )
}
