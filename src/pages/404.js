import React from 'react';
import {Link} from 'gatsby';
import {css} from '@emotion/core'
import Navbar from '../Components/NavBar';

const ErrorPage = () => {
    return (
        <div>
          <Navbar/>
          <div>
           <button css={button}><Link to="/">Home</Link></button>
          </div>
        </div>
    );
};

const button = css`
    margin: 80vh 225vh;
    padding: 9px;
    border-radius: 4px;
    border: 1px solid #eeee;
    box-shadow: 0px 0px 6px 1px;

`

export default ErrorPage;