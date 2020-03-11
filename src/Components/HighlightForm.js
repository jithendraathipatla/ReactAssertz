import React from 'react';
import axios from 'axios';
import '../GlobalStyles/styles.css';


const HighlightForm = () => {
    const handelformdata = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone_no.value;

        const client_information = {
            client_name:name,
            client_email:email,
            client_phone:phone,
            project_name:"Prestige Waterford"
        }
        var data = {
            service_id: 'gmail',
            template_id: 'normal',
            user_id: 'user_s9VasukllOwTDnR8R0FWD',
            template_params: client_information,
        }
      
        axios.post('https://api.emailjs.com/api/v1.0/email/send',  data )
        .then(res => {
          console.log(res);
          console.log(res.data);
          alert("You will now be redirected.");
          window.location = "/download/";
        })
      
    }
    return (
        <div>
        <form onSubmit={handelformdata}>
        <div className="quote-form">
                <div className="form-head">
                <h1>ENQUIRE NOW</h1>
                </div>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required/>
                </div>
                            
            <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required/>
            </div>
                            
            <div className="form-group">
           
          <input type="text" name="phone_no" placeholder="Your Phone" minLength="10" maxLength="20" title="Must have 10 digit numbers" pattern="^\d{10}$" required/>
            </div>
                                        
                <div className="form-button">
                <button type="submit" value="send" className="prestigecopyabcd">Submit</button>
                </div>						
            </div>
        
    </form>
        </div>
    );
};

export default HighlightForm;