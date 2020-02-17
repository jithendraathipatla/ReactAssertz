import React,{useState} from 'react';
import Modalabc from 'react-responsive-modal';
import Form from './Form';
import '../GlobalStyles/styles.css';
import OfficialLogo from '../Imagesa/Images/logo.svg';
import Callusback from '../Imagesa/Images/svg/call-back.svg'

const Modal = (props) => {
    const [isopen, setisopen] = useState(false);
    return (
        <div className="finaltouch">
        <a onClick={() => setisopen(true)} className={props.class}>{props.title}</a>
        <Modalabc open={isopen} onClose={ () => setisopen(false)}>
       
        <div style={{textAlign:"center"}}>
        <img className="modalImageLogo" src={OfficialLogo} alt="Marq 2.0"/>
        </div>
          <Form/>
          <br/>
         <div style={{height:"10px"}}></div>
        </Modalabc>
        </div>
    );
};
    
export default Modal;