import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Elysian = () => {
    return (
        <Layout title="prestige elysian | reviews | Brouchere | Location">
        
         <h1>I am from the elysian</h1>
         <OverviewComponent project="Elysian Overview"/>
         <hr/>
         <Amenities project="Elysian Amenities"/>
        </Layout>
    );
};

export default Elysian;