import React from 'react'
import TopHeader from '../Components/navigation/TopHeader';
import Navbar from '../Components/navigation/Navbar';
import Footer from '../Components/navigation/Footer';
import ShopHeroSection from '../Shop/ShopHeroSection';
import ProductPages from '../Components/ProductPages';


function Shop() {


    return (
        <>
            <TopHeader />
            <Navbar />
            <ShopHeroSection />
            <ProductPages />
            <Footer /> 
        </>
    )
}
export default Shop;