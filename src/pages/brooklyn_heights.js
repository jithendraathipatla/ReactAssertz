import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Brooklyn = () => {
    return (
        <Layout title="prestige brooklyn heights | Brouchere | Location">
         <h1>I am from the Brooklyn Heights</h1>
         <OverviewComponent project="Brooklyn Heights Overview"/>
         <hr/>
         <Amenities project="Brooklyn Heights Amenities"/>
        </Layout>
    );
};

export default Brooklyn;