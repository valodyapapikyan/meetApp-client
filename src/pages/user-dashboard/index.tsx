import React, { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import EventListRender from '../../components/render-event-list';
import useEvents from '../../hooks/use-events/index';
import './index.scss'
const UserDashBoard: FC<any> = () => {

  return (
    <div className='container-root'>
      <EventListRender/>
    </div>
  );
};

export default UserDashBoard;
