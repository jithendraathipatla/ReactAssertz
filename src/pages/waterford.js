import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import Overcomponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import SecondSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde3.jpg';
import ThirdSliderImage from '../Imagesa/Images/prestige-finsbury-regent1.jpg';
import FourthSliderImage from '../Imagesa/Images/prestige-finsbury-regent4.jpg';
import ProjectLogo from '../Imagesa/Images/logo.png';

const Waterford = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "3 BHk",
            feet: "Know More",
            price:"Know More"
        },
        {
            bed: "4 BHK Medium",
            feet: "Know More",
            price:"Know More"
        },
        {
            bed: "4 BHK Large",
            feet: "Know More",
            price: "Know More"
        },
    ])
    return (
        <Layout title="prestige waterford | ITPL | Brouchere | Location">
          <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Waterford" location="In Whitefield," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="3" bedroomthree="4" price="_ _"/>
          <br/>
         <Overcomponent project="Waterford Overview"/>
         <hr/>
         <ConfigurationComponent project="Waterford Configuration" tabelone={squarefeet}/>
         <hr/>
         <Amenities project="Waterford Amenities"/>
         <hr/>
         <LocationComponent title="Waterford Location"  logo={ProjectLogo} iframe="null"/>

        </Layout>
    );
};

export default Waterford;