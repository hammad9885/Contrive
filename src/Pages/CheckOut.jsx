import React from 'react'
import TopHeader from '../Components/navigation/TopHeader'
import Navbar from '../Components/navigation/Navbar'
import Footer from '../Components/navigation/Footer'
import PaymentMethod from '../Components/PaymentMethod/PaymentMethod'

function CheckOut() {
    

    return (
        <>
            <TopHeader />
            <Navbar />
            <PaymentMethod />
            <Footer />
        </>
    )
}
export default CheckOut