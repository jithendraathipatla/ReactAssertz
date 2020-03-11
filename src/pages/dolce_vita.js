import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';



const Dolce = () => {
    return (
        <Layout title="prestige dolce vita | reviews | Location">
         <h1>I am from the dolce vita</h1>
         <OverviewComponent project="Dolce Vita Overview"/>
         <hr/>
         <Amenities project="Dolce Vita Amenities"/>
        </Layout>
    );
};

export default Dolce;