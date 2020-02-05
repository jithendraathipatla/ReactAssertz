import React from 'react';
import PricingCard from './CardforPricing';
import Title from './Title';

const Costing = () => {
    return (
        <div style={{textAlign:"center"}}>
          <Title title="Marq Pricing" />
        <div style={{display:"grid", gridTemplateColumns:"3fr 3fr 3fr", gridGap:"10px"}}>
            <PricingCard bhk="3 BHK + 2 T"/>
            <PricingCard bhk="3 BHK + 3 T"/>
            <PricingCard bhk="4 BHK + 4 T"/>
        </div>
        </div>
    );
};

export default Costing;