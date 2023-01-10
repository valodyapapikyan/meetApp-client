import React, { FC } from 'react';
import EventListRender from '../../components/render-event-list';
import useEvents from '../../hooks/use-events/index';

import './index.scss'
const Dashboard: FC<any> = () => {

  return (
    <div className='container-root'>
      <EventListRender/>
    </div>
  );
};
export default Dashboard;
