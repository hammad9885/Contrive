import React from 'react'
import TopHeader from '../Components/navigation/TopHeader';
import Navbar from '../Components/navigation/Navbar';
import HomeHeroSection from '../Home/HomeHeroSection';
import DiscountItems from '../Home/DiscountItems';
import HomeDelevireDetails from '../Home/HomeDelevireDetails';
import PopularProducts from '../Home/PopularProducts';
import AboutCrafting from '../Home/AboutCrafting';
import HomeCategories from '../Home/HomeCategories';
import SpecialOffer from '../Home/SpecialOffer';
import Testimonials from '../Home/Testimonials';
import NewArticles from '../Home/NewArticles';
import NewsLetterUpdate from '../Home/NewsLetterUpdate';
import Footer from '../Components/navigation/Footer';

function Home() {
    

    return (
        <>
          <TopHeader />
          <Navbar />  
          <HomeHeroSection />
          <DiscountItems />
          <HomeDelevireDetails />
          <PopularProducts />
          <AboutCrafting />
          <HomeCategories />
          <SpecialOffer />
          <Testimonials />
          <NewArticles />
          <NewsLetterUpdate />
          <Footer />
        </>
    )
}
export default Home;