import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from "react-redux";
import { loginSelector } from "../../redux/selectors";


const Profile = () => {
  const history = useHistory();
  const { userEmail, sign } = useSelector(loginSelector)

  React.useEffect(() => {

    !sign && history.push('/');
  }, [sign, history]);

  return <h1>login: {userEmail}</h1>
};

export default Profile;
