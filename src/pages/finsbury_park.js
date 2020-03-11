import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Finsbury = () => {
    return (
        <Layout title="prestige finsbury park | reviews | Brouchere | Location">
        
         <h1>I am from the Finsbury tree</h1>
         <OverviewComponent project="Finsbury Park Overview"/>
         <hr/>
         <Amenities project="Finsbury Park Amenities"/>
        </Layout>
    );
};

export default Finsbury;