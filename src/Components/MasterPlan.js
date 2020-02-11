import React,{useState} from 'react';
import LightHouseabc from './Lighthouse';
import MasterPlanabcd from '../Imagesa/Images/masterplan-hyde.jpg';
import Masterplanregent from '../Imagesa/Images/master.jpg';


const MasterPlan = () => {
    const [masterplan, setmasterplan] = useState([
        {   
            name:"Master Plan Hyde",
            image:MasterPlanabcd
        },
        {   
            name:"Master Plan Regent",
            image:Masterplanregent
        }
    ]);
    return (
        <div>
        <LightHouseabc images={[MasterPlanabcd, Masterplanregent]} state={masterplan}/>
        </div>
    );
};

export default MasterPlan;