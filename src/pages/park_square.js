import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';


const Park = () => {
    return (
        <Layout title="prestige elysian | reviews | Brouchere | Location">
         <h1>I am from the Park_square</h1>
         <OverviewComponent project="Park Square Overview"/>
         <hr/>
         <Amenities project="Park Square Amenities"/>
        </Layout>
    );
};

export default Park;