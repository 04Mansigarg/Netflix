import React from 'react'
import { useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import styles from "../HomePage/HomePage.module.css"

export const Item = () => {
    const [data, setData] = React.useState([])
    const mainItem = useSelector((state) => state.mainItem)
    const endItem = useSelector((state) => state.endCategoryItem)
    console.log(mainItem)
    React.useEffect(() => {
        fetch(`http://localhost:8000/${endItem}?category=${mainItem}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>{mainItem}</h3>
            <div className={styles.rowImages}>
                {data.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
