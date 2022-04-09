import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_horror_tvshows } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const HorrorTvShows = () => {
    const horrorShows = useSelector((state => state.horror_tv))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflixd.herokuapp.com/tvshows?category=Horror")
            .then((res) => res.json())
            .then((res) => dispatch(get_horror_tvshows(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Horror</h3>
            <div className={styles.rowImages}>
                {horrorShows.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
