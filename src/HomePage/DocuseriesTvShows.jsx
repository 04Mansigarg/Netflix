import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_docuseries_tvshows } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const DocuseriesTvShows = () => {
    const docuseriesShows = useSelector((state => state.docuseries_tv))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("http://localhost:3000/tvshows?category=Docuseries")
            .then((res) => res.json())
            .then((res) => dispatch(get_docuseries_tvshows(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Docuseries</h3>
            <div className={styles.rowImages}>
                {docuseriesShows.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
