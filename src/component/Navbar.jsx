 
import React from 'react'
import styles from "../component/Style/Navbar.module.css"

// import Header from "./components/Header";

// import Header from './header'
// import {Sidebar} from './Side'

const Navbar = () => {
  return (
    <>
    <div className={styles.nav}>
        <div className={styles.netlogo}>
            <img className={styles.netimage} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" width="110%" alt="" />
        </div>
        <div className={styles.home} >
            <h4>Home</h4>
            <h4>Tv Shows</h4>
            <h4>Movies</h4>
            <h4>News & Popular </h4>
            <h4>My List</h4>
        </div>
        <div className={styles.corner}>
        <i class="large material-icons" id=''>search</i>
       
    <div> <input type="text"  /></div>
        <p>Kids</p>
        
        <i class="large material-icons">notifications</i>
        <i class="large material-icons">menu</i>
        {/* <Sidebar /> */}
        {/* <Header /> */}
        </div>
    </div>
    </>
  )
}

export default Navbar