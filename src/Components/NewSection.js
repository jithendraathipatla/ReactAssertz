import React from 'react';
import Title from '../Components/Title';
import '../GlobalStyles/styles.css';
import SideProperties from '../Imagesa/Images/prestige-waterford-banner.jpg';

const NewSection = () => {
    return (
        <div>
        <div style={{textAlign:"center"}}>
         <Title title="Advantages of being at Prestige Waterford"/>
        </div>
            <div className="newSection">
               <div>
                 <img src={SideProperties} alt="location image" style={{height:"290px", width:"100%"}}/>
               </div>
               <div style={{textAlign:'justify'}}>
                 <ul >
                 <li>i)  Access to best Air</li>
                 <li>ii) Quality Life</li>
                 <li>iii) Kids Playing Area</li>
                 <li>iv)  24/7 Security</li>
                 <li>v) 24/7 Power Supply</li>
                 <li>vi) ATM</li>
                 </ul>
                 <br/>
                 <ul>
                 <li>i)  Indoor Playing Area</li>
                 <li>ii)  Lobby</li>
                 <li>iii)  Cafeteria</li>
                 <li>iv)  Tennis Court</li>
                 <li>v)  Shuttle Court</li>
                 </ul>

               </div>
            </div>
        </div>
    );
};



export default NewSection;