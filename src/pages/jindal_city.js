import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Jindal = () => {
    return (
        <Layout title="prestige jindal city | reviews | Brouchere | Location">
        
         <h1>I am from the Jindal city</h1>
         <OverviewComponent project="Jindal city Overview"/>
         <hr/>
         <Amenities project="Jindal City Amenities"/>
        </Layout>
    );
};

export default Jindal;