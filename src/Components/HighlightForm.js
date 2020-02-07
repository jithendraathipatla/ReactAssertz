import React from 'react';
import '../GlobalStyles/styles.css';

const HighlightForm = () => {
    return (
        <div>
        <form>
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
                <input type="text" name="phone_no" placeholder="Your Phone" minlength="10" maxlength="20" title="Must have 10 digit numbers" pattern="^\d{10}$" required/>
            </div>
                                        
                <div className="form-button">
                <button type="submit" value="send" className="quoteSubmit">Submit</button>
                </div>						
            </div>
        
    </form>
        </div>
    );
};

export default HighlightForm;