import axios from 'axios';
import React, { FC, useMemo } from 'react';
import './index.scss';
import useAuth from '../../hooks/use-auth/index';
import { IUser } from '../../types';

const Header: FC<any> = () => {
  const { redirectUrl, user = {} as IUser, isLogedIn } = useAuth();

  const userFullName = useMemo(() => {
    if (user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`;
    }
    return '';
  }, [user]);

  return (
    <div className="header">
      <div>{userFullName}</div>
      {!isLogedIn ? (
        <a className="linkedin_btn" href={redirectUrl}>
          <span>Sign up with Linkedin</span>
        </a>
      ) : null}
    </div>
  );
};

export default Header;
