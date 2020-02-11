import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import Logo from '../Imagesa/Images/prestige-finsbury-hyde-logo.jpg';
import '../GlobalStyles/styles.css';

const Location = () => {
    return (
        <div className="locationPart">
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="FinsBury Park Location"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15541.291396491108!2d77.684435!3d13.142024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0be65d7c84b08a7!2sPrestige%20Finsbury%20Park!5e0!3m2!1sen!2sin!4v1577365700493!5m2!1sen!2sin" width="100%" height="517" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div className="aliginingForm">
        <div style={{textAlign:"center"}}>
            <img src={Logo} alt="FinsBury Park" width="200px"/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

export default Location;