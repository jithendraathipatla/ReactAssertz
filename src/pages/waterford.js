import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import Overcomponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';


const waterford = () => {
    return (
        <Layout title="prestige waterford | ITPL | Brouchere | Location">
         <h1>I am from the waterford tree</h1>
         <Overcomponent project="Waterford Overview"/>
         <hr/>
         <Amenities project="Waterford Amenities"/>
         <hr/>
         <LocationComponent title="Waterford Location" iframe="null"/>

        </Layout>
    );
};

export default waterford;