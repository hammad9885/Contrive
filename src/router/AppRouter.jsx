import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Faq from '../Pages/Faq';
import Cart from '../Pages/Cart';
import Profile from '../Pages/Profile';
import CheckOut from '../Pages/CheckOut';
import ThankYou from '../Pages/ThankYou';

function AppRouter() {
    

    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/shop' element={ <Shop /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/faq' element={ <Faq /> } />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/profile' element={ <Profile /> } />
                <Route path='/check' element={ <CheckOut /> } />
                <Route path='/thank' element={ <ThankYou /> } />
            </Routes>
        </Router>
          
        </>
    )
}
export default AppRouter;