import React from 'react';

import './Auth.scss';
import Form from "../../components/Form";

const Auth = () => {
  return (
    <div className='auth'>
      <h2 className='auth__title'>Sign in</h2>
      <p className='auth__description'>Please enter your email and password</p>

      <Form />
    </div>
  );
};

export default Auth;
