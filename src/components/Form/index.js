import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { loginSelector } from "../../redux/selectors";

import './Form.scss';


const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userEmail } = useSelector(loginSelector);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const disabledButton = !(emailValue === userEmail && passwordValue === '123456');

  const onSubmit = () => {
    dispatch({type: 'REDUCER_SIGN'})
    history.push('/profile');
  }

  return (
    <form className='form' onSubmit={onSubmit}>
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
