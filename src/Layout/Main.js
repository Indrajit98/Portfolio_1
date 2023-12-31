import React from 'react';
import Navbar from '../components/Share/Navbar/Navbar';
import Footer from '../components/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>  
        </div>
    );
};

export default Main;