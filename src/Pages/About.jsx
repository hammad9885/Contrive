import React from 'react'
import TopHeader from '../Components/navigation/TopHeader';
import Navbar from '../Components/navigation/Navbar';
import Footer from '../Components/navigation/Footer';
import AboutHeroSection from '../About/AboutHeroSection';
import FurnitureDesign from '../About/FurnitureDesign';
import HomeDelevireDetails from '../Home/HomeDelevireDetails';
import Testimonials from '../Home/Testimonials';
import NewArticles from '../Home/NewArticles';
import Unforgettable from '../About/Unforgettable';
import OurTeam from '../About/OurTeam';

function About() {
    

    return (
        <>
          <TopHeader /> 
          <Navbar />
          <AboutHeroSection />
          <FurnitureDesign />
          <HomeDelevireDetails />
          <Unforgettable />
          <OurTeam />
          <Testimonials />
          <NewArticles />
          <Footer /> 
        </>
    )
}
export default About;