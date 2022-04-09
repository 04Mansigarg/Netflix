
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_indian_tvshows } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const IndianTvShows = () => {





    const indianShows = useSelector((state => state.indian_tv))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflixd.herokuapp.com/tvshows?category=Indian")
            .then((res) => res.json())
            .then((res) => dispatch(get_indian_tvshows(res)))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Indian Tv Shows</h3>
            <div className={styles.rowImages}>
                {indianShows.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}

