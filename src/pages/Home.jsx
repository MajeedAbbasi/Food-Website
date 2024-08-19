import React from 'react'
import Navbar from '../components/Navbar'
import CatagoryMenu from '../components/CatagoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
const Home = () => {
    return (
        <>
            <Navbar />
            <CatagoryMenu />
            <FoodItems />
            <Cart />
        </>
    )
}

export default Home
