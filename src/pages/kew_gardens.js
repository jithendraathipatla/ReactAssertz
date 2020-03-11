import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';

const Key = () => {
    return (
        <Layout title="prestige kew gardens | reviews | Brouchere | Location">
         <h1>I am from the Kew Garden</h1>
         <OverviewComponent project="Kew Gardens Overview"/>
         <hr/>
         <Amenities project="Kew Gardens Amenities"/>
         <hr/>
         <LocationComponent title="Kew Gardens Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.369887370166!2d77.67875251413496!3d12.94816691889703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13bf5d0f0ab1%3A0x472b15a1a017efa7!2sPrestige%20Kew%20Gardens%2C%20Kariyammana%20Agrahara%20Rd%2C%20Shan%20Boga%20Colony%2C%20Yemalur%2C%20Bellandur%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1583828362069!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Key;