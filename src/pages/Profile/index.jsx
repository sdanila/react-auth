import React from 'react';
import {useSelector} from "react-redux";
import {loginSelector} from "../../redux/selectors";

const Profile = () => {
  const { userEmail } = useSelector(loginSelector)
  return <h1>{userEmail}</h1>
};

export default Profile;
