import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_bollywood } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const Bollywood = () => {
    const bollywood = useSelector((state => state.bollywood))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflixd.herokuapp.com/movies?category=Bollywood")
            .then((res) => res.json())
            .then((res) => dispatch(get_bollywood(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Bollywood</h3>
            <div className={styles.rowImages}>
                {bollywood.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )

}
