import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import './Gallery.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';


const Gallery = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Marq Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div>
              <Title title="Marq Interior, Exterior & Masterplan"/>
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan"/>
              </div>
              <div>
              <Title title="Marq Floor Plans"/>
              <TabContainer title1="Floor Plan"/>
              </div>
            </div>
             
            </div>
        </div>
    );
};

export default Gallery;