import React,{useState} from 'react';
import LightHouseabc from './Lighthouse';
import MasterPlanabcd from '../Images/mplan.jpg';

const MasterPlan = () => {
    const [masterplan, setmasterplan] = useState([
        {
            image:MasterPlanabcd
        }
    ]);
    return (
        <div>
        <LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>
        </div>
    );
};

export default MasterPlan;