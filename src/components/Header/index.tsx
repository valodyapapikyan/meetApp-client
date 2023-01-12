import React, { FC, useMemo, useState } from 'react';

import './index.scss';
import useAuth from '../../hooks/use-auth/index';
import { IUser } from '../../types';
import { useNavigate } from 'react-router';
import useEvents from '../../hooks/use-events/index';


const Header: FC<any> = () => {
  const { redirectUrl, user = {} as IUser, isLogedIn } = useAuth();

  const navigate = useNavigate();

  const redirect = () => {
    if (isLogedIn) {
      return navigate('/create-event');
    }
  };


  const userFullName = useMemo(() => {
    if (user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`;
    }
    return '';
  }, [user]);

  return (
    <div className="header">

      <span>
        <img src={user?.profilePicture} alt=""/>
      </span>
      <div>{userFullName}</div>
      <button onClick={redirect}> create event</button>

      {!isLogedIn ? (
        <a className="linkedin_btn" href={redirectUrl}>
          <span>Sign up with Linkedin</span>
          <div>
      </div>
        </a>
      ) : null}
    </div>
  );
};

export default Header;
