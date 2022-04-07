import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_tvshows } from '../Redux-Store/Home/Action'
import styles from "../HomePage/HomePage.module.css"

export const AllTvShows = () => {
    const tvshows = useSelector((state => state.tv_shows))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("http://localhost:3000/tvshows")
            .then((res) => res.json())
            .then((res) => dispatch(get_tvshows(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Tv Shows</h3>
            <div className={styles.rowImages}>
                {tvshows.map(items => {
                    return <div className={styles.rowImage} key={items.id}>
                        <img src={items.thumbnail} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}
