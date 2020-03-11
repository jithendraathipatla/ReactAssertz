import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';




const Finsbury = () => {
    return (
        <Layout title="prestige finsbury park | reviews | Brouchere | Location">        
         <h1>I am from the Finsbury tree</h1>
         <OverviewComponent project="Finsbury Park Overview"/>
         <hr/>
         <Amenities project="Finsbury Park Amenities"/>
         <hr/>
         <LocationComponent title="Finsbury Park Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15540.99810165567!2d77.66788112783367!3d13.14665435185809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b7d5e8061c3%3A0xd0be65d7c84b08a7!2sPrestige%20Finsbury%20Park!5e0!3m2!1sen!2sin!4v1583828086918!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Finsbury;