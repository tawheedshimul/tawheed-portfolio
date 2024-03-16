import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer/Footer';


const Main = () => {
    return (
        <div className='space-y-[60px]'>
            <div className='fixed top-0 w-full z-40'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='fixed bottom-0 w-full'>
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;