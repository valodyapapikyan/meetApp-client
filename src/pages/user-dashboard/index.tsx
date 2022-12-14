import React, { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import EventListRender from '../../components/render-event-list';
import useEvents from '../../hooks/use-events/index';

const UserDashBoard: FC<any> = () => {

  const location = useLocation();
  const params  = useParams();
  console.log(location);
  console.log(params);
  
  
  return (
    <div>
      <EventListRender/>
    </div>
  );
};

export default UserDashBoard;
