import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_awardwinning } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const AwardWinning = () => {
    const awardwinning = useSelector((state => state.awardwinning))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflixd.herokuapp.com/movies?category=AwardWinning")
            .then((res) => res.json())
            .then((res) => dispatch(get_awardwinning(res)))
            .catch((err) => console.log(err))
    }, [])
    console.log(awardwinning)

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Award Winning</h3>
            <div className={styles.rowImages}>
                {awardwinning.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
