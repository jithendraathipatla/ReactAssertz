import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';





const Elysian = () => {
    return (
        <Layout title="prestige elysian | reviews | Brouchere | Location">
         <SliderComponent/>
         <OverviewComponent project="Elysian Overview"/>
         <hr/>
         <Amenities project="Elysian Amenities"/>
         <hr/>
         <LocationComponent title="Elysian Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.53596909848!2d77.59184831413425!3d12.87322012051415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15255b79d7ad%3A0x1fdc3f6d55183b1!2sPrestige%20Elysian!5e0!3m2!1sen!2sin!4v1583827860303!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Elysian;