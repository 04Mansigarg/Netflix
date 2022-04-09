import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_hollywood } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const Hollywood = () => {
    const hollywood = useSelector((state => state.hollywood))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflixd.herokuapp.com/movies?category=Hollywood")
            .then((res) => res.json())
            .then((res) => dispatch(get_hollywood(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Hollywood</h3>
            <div className={styles.rowImages}>
                {hollywood.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )

}
