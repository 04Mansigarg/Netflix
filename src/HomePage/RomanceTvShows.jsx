import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_romance_tvshows } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const RomanceTvShows = () => {
    const romanceShows = useSelector((state => state.romance_tv))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("http://localhost:3000/tvshows?category=Romance")
            .then((res) => res.json())
            .then((res) => dispatch(get_romance_tvshows(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Romantic Tv Shows</h3>
            <div className={styles.rowImages}>
                {romanceShows.map(items => {
                    return <div className={styles.rowImage} key={items.id}>
                        <img src={items.thumbnail} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}
