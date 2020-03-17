import React from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SideMenu from '../Components/SideMenu';
import SeoComponent from '../Components/SEO';

const Layout = (props) => {
    return (
        <div>
        <SeoComponent title={props.title}/>
        <Navbar/>
        <SideMenu project_name={props.project} link={props.page}/>
        {props.children}
        <Footer/>
        </div>
    );
};

export default Layout;