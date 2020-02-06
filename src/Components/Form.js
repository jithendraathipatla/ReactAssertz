import React, {useState} from 'react';
import axios from 'axios';
import Button from './Button';


const Form = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
 
  const handelingFormdata = (e) => {
    e.preventDefault();
    let client_name = e.target.elements.name.value;
    let client_email = e.target.elements.email.value;
    let phonenumber = e.target.elements.phone.value;
    if(phonenumber.length > 10){
      alert('Must enter a Valid Number');
    }
    const finalData = {
      Client_name:client_name,
      Client_email:client_email,
      Client_phone_number: phonenumber,
      Project_Name:"Assertz Marq",
    }
    var data = {
      service_id: 'gmail',
      template_id: 'normal',
      user_id: 'user_s9VasukllOwTDnR8R0FWD',
      template_params: finalData
  }

  axios.post('https://api.emailjs.com/api/v1.0/email/send',  data )
  .then(res => {
     console.log(res);
  })
          
  }

    return (
      <form onSubmit={handelingFormdata} name="main_forma" method="post">
    <div>
      <br/>
  <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" name="name" required value={name}  placeholder="e.g Alex Smith" />
  </div>
  </div>
  

  <div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" name="email" required value={email}  placeholder="e.g. alexsmith@gmail.com"/>
  </div>
  </div>

  <div className="field">
  <label className="label">Phone Number</label>
  <div className="control">
    <input className="input" type="number" name="phone" required maxLength={10} value={phone}  placeholder="e.g. 999999999"/>
  </div>
  </div>
  <br/>
  <Button name="submit">Submit</Button>
  </div>
  </form>
        
    );
};

export default Form;