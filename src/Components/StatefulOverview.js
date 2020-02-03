import React, {useState} from 'react';
import ProjectType from '../Images/svg/house.svg';
import TotalLandArea from '../Images/svg/mountain.svg'
import TotalUnits from '../Images/svg/binary-code.svg';
import NumberOfFloors from '../Images/svg/castle.svg';
import TotalTowers from '../Images/svg/cityscape.svg';
import UnitVarients from '../Images/svg/towel.svg';
import PossessionDate from '../Images/svg/calendar.svg';
import Location from '../Images/svg/location.svg';
import Title from './Title';


const StatefulOverview = () => {
    const [state, setstate] = useState([{
        main_title:"Project Type",
        sub_heading:"Residential Unit",
        image:ProjectType,
    },
    {
        main_title:"Total Land Area",
        sub_heading:"22 Aceres",
        image:TotalLandArea,
    },
    {
        main_title:"Total Units",
        sub_heading:"297 Units",
        image:TotalUnits,
    },
    {
        main_title:"Number Of Floors",
        sub_heading:"B + G + 28",
        image:NumberOfFloors,
    },
    {
        main_title:"Total Towers",
        sub_heading:"2 Blocks",
        image:TotalTowers,
    },
    {
        main_title:"Unit Varients",
        sub_heading:"3 & 4 BHK",
        image:UnitVarients,
    },
    {
        main_title:"Possession Date",
        sub_heading:"Nov 2022",
        image:PossessionDate,
    },
    {
        main_title:"Location",
        sub_heading:"Whitefield-Hoskote Bangalore",
        image:Location,
    }
    ]);

    
    const displayingOverview = () => {
        console.log(state)
        return state.map((item,i)=>{
          return (
              <div key={i} style={{display:"flex"}}>
                <img src={item.image} alt={item.main_title} width="25px" style={{flex:"2", border:"1px solid #eee", padding:"10px"}}/>
                <div style={{flex:"4", display:"block", marginLeft:"15px"}}>
                 <h1>{item.main_title}</h1>
                 <h2>{item.sub_heading}</h2>
                 </div>
              </div>
          )
        })
    }


    return (
       
        <div>
        <Title title="Marq Overview"/>
        <div style={{display:"grid", gridTemplateColumns:"3fr 3fr 3fr 3fr", gridGap:"20px"}}>
        {displayingOverview()}
        </div>
        </div>
    );
};

export default StatefulOverview;


