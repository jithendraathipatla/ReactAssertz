import React from 'react';
import Title from '../Components/Title';
import '../GlobalStyles/styles.css';
import SideProperties from '../Imagesa/Images/prestige-finsbury-park-hyde3.jpg';

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
               <div>
                 <ul>
                 <li>i)  Coming Soon</li>
                 <li>ii)  Coming Soon</li>
                 <li>iii)  Coming Soon</li>
                 <li>iv)  Coming Soon</li>
                 <li>v)  Coming Soon</li>
                 <li>vi)  Coming Soon</li>
                 </ul>
                 <br/>
                 <ul>
                 <li>i)  Coming Soon</li>
                 <li>ii)  Coming Soon</li>
                 <li>iii)  Coming Soon</li>
                 <li>iv)  Coming Soon</li>
                 <li>v)  Coming Soon</li>
                 </ul>

               </div>
            </div>
        </div>
    );
};



export default NewSection;