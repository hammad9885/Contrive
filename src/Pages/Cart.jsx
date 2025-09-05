import React from 'react'
import TopHeader from '../Components/navigation/TopHeader'
import Navbar from '../Components/navigation/Navbar'
import CartHeroSection from '../Cart/CartHeroSection'
import Footer from '../Components/navigation/Footer'
import AddToCart from '../Components/AddToCart'

function Cart() {
    

    return (
        <>
            <TopHeader />
            <Navbar />
            <CartHeroSection />
            <AddToCart />
            <Footer />
        </>
    )
}
export default Cart