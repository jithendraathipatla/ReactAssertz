import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';




const amenities = () => {
    return (
        <Layout title="prestige fontaine bleau | reviews | Brouchere | Location">
        
         <h1>I am from the fontaine bleau</h1>
         <OverviewComponent project="Fontaine Bleau Overview"/>
         <hr/>
         <Amenities project="Fontaine Bleau Amenities"/>
         <hr/>
         <LocationComponent title="Fontaine Bleau Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.949070287174!2d77.74051741413528!3d12.975109318313503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ff99828ba3%3A0xc975735a9e91bfbe!2sPRESTIGE%20FONTAINE%20BLEAU!5e0!3m2!1sen!2sin!4v1583828183205!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default amenities;