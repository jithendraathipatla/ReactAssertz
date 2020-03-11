import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const willo = () => {
    return (
        <Layout title="prestige willow tree | reviews | Brouchere | Location">
         <h1>I am from the Willo tree</h1>
         <OverviewComponent project="Willo Tree Overview"/>
         <hr/>
         <Amenities project="Wollow Tree Amenities"/>
        </Layout>
    );
};

export default willo;