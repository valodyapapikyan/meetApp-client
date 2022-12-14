import React, { FC } from 'react';
import EventListRender from '../../components/render-event-list';
import useEvents from '../../hooks/use-events/index';

const Dashboard: FC<any> = () => {

  return (
    <div>
      <EventListRender/>
    </div>
  );
};
export default Dashboard;
