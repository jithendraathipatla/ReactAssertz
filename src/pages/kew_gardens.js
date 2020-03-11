import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Key = () => {
    return (
        <Layout title="prestige kew gardens | reviews | Brouchere | Location">
         <h1>I am from the Kew Garden</h1>
         <OverviewComponent project="Kew Gardens Overview"/>
         <Amenities project="Kew Gardens Amenities"/>
        </Layout>
    );
};

export default Key;