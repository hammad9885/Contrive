import React from 'react'
import TopHeader from '../Components/navigation/TopHeader';
import Navbar from '../Components/navigation/Navbar';
import Footer from '../Components/navigation/Footer';
import FaqHeroSection from '../Faq/FaqHeroSection';
import SpecialOffer from '../Home/SpecialOffer';
import Testimonials from '../Home/Testimonials';
import NewArticles from '../Home/NewArticles';
import FaQuestions from '../Faq/FaQuestions';

function Faq() {
    

    return (
        <>
           <TopHeader /> 
          <Navbar />
          <FaqHeroSection />
          <FaQuestions />
          <SpecialOffer />
          <Testimonials />
          <NewArticles />
          <Footer />  
        </>
    )
}
export default Faq;