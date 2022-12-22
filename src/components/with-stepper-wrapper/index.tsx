import React from 'react';
import { Progress } from 'dino_ui_tools';

export const WithWrapper =
  (Component: (props: any) => JSX.Element) => (props: any) => {
    const { activeStepIndex = 1, stepCount, prevHandler } = props;
    const percent = (activeStepIndex * 100) / stepCount;

    return (
      <div>
        <span
          onClick={prevHandler}
          style={activeStepIndex < 1 ? { visibility: 'hidden' } : {}}
        >
          {' '}
          back{' '}
        </span>
        <Progress percent={percent} />
        <Component {...props} />
      </div>
    );
  };
