import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import Overcomponent from '../Components/StatefulOverview';


const waterford = () => {
    return (
        <Layout title="prestige waterford | ITPL | Brouchere | Location">
         <h1>I am from the waterford tree</h1>
         <Overcomponent/>
         <Amenities project="Waterford Amenities"/>
        </Layout>
    );
};

export default waterford;