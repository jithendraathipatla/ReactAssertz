import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const amenities = () => {
    return (
        <Layout title="prestige song of south | reviews | Brouchere | Location">        
         <h1>I am from the song of south</h1>
         <OverviewComponent project="Song of South Overview"/>
         <hr/>
         <Amenities project="Song of South Amenities"/>
        </Layout>
    );
};

export default amenities;