import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_awardwinning } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const AwardWinning = () => {
    const awardwinning = useSelector((state => state.awardwinning))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("http://localhost:3000/movies?category=AwardWinning")
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
                    return <div className={styles.rowImage} key={items.id}>
                        <img src={items.thumbnail} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}
