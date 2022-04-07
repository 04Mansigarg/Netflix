import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_hollywood } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const Hollywood = () => {
    const hollywood = useSelector((state => state.hollywood))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("http://localhost:3000/movies?category=Hollywood")
            .then((res) => res.json())
            .then((res) => dispatch(get_hollywood(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Hollywood</h3>
            <div className={styles.rowImages}>
                {hollywood.map(items => {
                    return <div className={styles.rowImage} key={items.id}>
                        <img src={items.thumbnail} alt="" />
                    </div>
                })}
            </div>
        </div>
    )

}
