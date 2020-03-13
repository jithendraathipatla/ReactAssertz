import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import Logo from '../Imagesa/Images/logo.png';
import '../GlobalStyles/styles.css';

const Location = () => {
    return (
        <div className="locationPart">
        <div style={{paddingLeft:"20px"}} id="mapframe">
        <div style={{textAlign:"center"}}>
        <Title title="Auriga Location"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.093988886768!2d77.72165691482259!3d13.029686390817787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1037f4ecfb4b%3A0xe7e06043fc59c9f2!2sConcorde%20Auriga!5e0!3m2!1sen!2sin!4v1584065284113!5m2!1sen!2sin" width="100%" height="435" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div className="aliginingForm">
        <div style={{textAlign:"center"}}>
            <img src={Logo} alt="Auriga" width="200px"/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

export default Location;