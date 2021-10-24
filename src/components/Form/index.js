import React, {useState} from 'react';

import './Form.scss';

const Form = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <form className='form'>
      <input
        type="email"
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
      <button className='form__button'>Sign in</button>
    </form>
  );
};

export default Form;