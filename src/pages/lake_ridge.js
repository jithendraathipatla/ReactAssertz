import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Lake = () => {
    return (
        <Layout title="prestige lake ridge | reviews | Brouchere | Location">
        
         <h1>I am from the Lake ridge</h1>
         <OverviewComponent project="Lake Ridge Overview"/>
         <hr/>
         <Amenities project="Lake Ridge Amenities"/>
        </Layout>
    );
};

export default Lake;