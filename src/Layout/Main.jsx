import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer/Footer';


const Main = () => {
    return (
        <div className='space-y-16'>
            <div className='fixed top-0 w-full z-40'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;