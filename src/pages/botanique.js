import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';


const Botanique = () => {
    return (
        <Layout title="prestige Botanique| Brouchere | Location">
         <h1>I am from the Botanique</h1>
         <OverviewComponent project="Botanique Overview"/>
         <Amenities project="Botanique Amenities"/>
        </Layout>
    );
};

export default Botanique;