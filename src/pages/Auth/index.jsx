import React from 'react';

import { Form } from "../../components";

import './Auth.scss';


const Auth = () => (
  <div className='auth'>
    <h2 className='auth__title'>Sign in</h2>
    <p className='auth__description'>Please enter your email and password</p>

    <Form/>
  </div>
);

export default Auth;
