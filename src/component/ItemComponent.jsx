import React from 'react'
import { Banner } from './Banner'
import { Item } from './Item'
import { ItemNav } from './ItemNav'
import Navbar from './Navbar'

export const ItemComponent = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Navbar />
            <Banner />
            <Item />
        </div>
    )
}
