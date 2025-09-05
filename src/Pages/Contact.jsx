import React from 'react'
import TopHeader from '../Components/navigation/TopHeader';
import Navbar from '../Components/navigation/Navbar';
import Footer from '../Components/navigation/Footer';
import ContactHeroSection from '../Contact/ContactHeroSection';
import ContactInfo from '../Contact/ContactInfo';
import SendMessage from '../Contact/SendMessage';
import Map from '../Contact/Map';

function Contact() {
    

    return (
        <>
            <TopHeader />
            <Navbar />
            <ContactHeroSection />
            <ContactInfo />
            <SendMessage />
            <Map />
            <Footer />
        </>
    )
}
export default Contact;