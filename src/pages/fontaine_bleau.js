import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const amenities = () => {
    return (
        <Layout title="prestige fontaine bleau | reviews | Brouchere | Location">
        
         <h1>I am from the fontaine bleau</h1>
         <OverviewComponent project="Fontaine Bleau Overview"/>
         <hr/>
         <Amenities project="Fontaine Bleau Amenities"/>
        </Layout>
    );
};

export default amenities;