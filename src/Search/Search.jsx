import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { search_data } from '../Redux-Store/Home/Action'
import styles from "../HomePage/HomePage.module.css"
import PopUp from '../components/PopUp'
import { padding } from '@mui/system'

export const Search = () => {
    let { q } = useParams()
    const searchData = useSelector(state => state.searchData)
    console.log(searchData)
    const dispatch = useDispatch()
    const getdata = () => {
        if (q === "Indian" || q === "Romance" || q === "Horror" || q === "Docuseries") {
            fetch(`https://netflixd.herokuapp.com/tvshows?category=${q}`)
                .then(res => res.json())
                .then((res) => dispatch(search_data(res)))
                .catch((err) => console.log(err))
        }
        else if (q === "Anime" || q === "Bollywood" || q === "Hollywood" || q === "AwardWinning") {
            fetch(`https://netflixd.herokuapp.com/movies?category=${q}`)
                .then(res => res.json())
                .then((res) => dispatch(search_data(res)))
                .catch((err) => console.log(err))
        }

    }
    React.useEffect(() => {
        getdata()
    }, [])
    return (
        <div className={styles.mainRow} style={{ marginTop: "4em", padding: "1em" }}>
            <h2 className={styles.mainHeading}>Explore Titles related to : {q}</h2>
            <div className={styles.rowImages}>
                {searchData.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
