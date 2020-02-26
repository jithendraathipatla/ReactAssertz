import React,{useState} from 'react';
import LightHouseabc from './Lighthouse';
import MasterPlanabcd from '../Imagesa/Images/Coming-Soon-Project-.jpg';



const MasterPlan = () => {
    const [masterplan, setmasterplan] = useState([
        {   
            name:"Master Plan",
            image:MasterPlanabcd
        },
     
    ]);
    return (
        <div>
        <LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>
        </div>
    );
};

export default MasterPlan;