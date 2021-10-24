import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { loginSelector } from "../../redux/selectors";

import './Form.scss';


const Form = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { userEmail } = useSelector(loginSelector);

  const disabledButton = !(emailValue === userEmail && passwordValue === '123456');

  return (
    <form className='form'>
      <input
        type="text"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        className="form__input"
        placeholder='email'
      />
      <input
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        className="form__input"
        placeholder='password'
      />
      {
        disabledButton
          ? <button className='form__button' disabled>Sign in</button>
          : <button type='submit' className='form__button'>Sign in</button>
      }
    </form>
  );
};

export default Form;
