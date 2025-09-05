import React from 'react'
import Navbar from '../Components/navigation/Navbar'
import TopHeader from '../Components/navigation/TopHeader'
import Footer from '../Components/navigation/Footer'
import UserProfile from '../Profile/UserProfile'

function Profile() {


    return (
        <>
            <TopHeader />
            <Navbar />
            <UserProfile />
            <Footer />
        </>
    )
}
export default Profile