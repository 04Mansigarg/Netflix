import React from 'react'
import { Email } from './Email'
import styles from "./Email.module.css"
import { Faqs } from './Faqs'
import { Footer } from './Footer'

export const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
            <Email />
            <div className={styles.viewSection}>
                <div className={styles.headings}>
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
            </div>
            <div className={styles.horizontal} />
            <div className={styles.viewSection}>
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                    <div className={styles.downloaderView}>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                        <h2>Stranger Things</h2>
                        <h2>Downloading</h2>
                    </div>
                </div>
                <div className={styles.headings}>
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>
            <div className={styles.horizontal} />
            <div className={styles.viewSection}>
                <div className={styles.headings}>
                    <h1>Watch Everywhere</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
            </div>

            <div className={styles.horizontal} />
            <div className={styles.viewSection}>
                <img src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="" />
                <div className={styles.headings}>
                    <h1>Create profiles for children.</h1>
                    <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>
            <div className={styles.horizontal} />
            <Faqs />
            <div className={styles.horizontal} />
            <Footer />
        </div>

    )
}
