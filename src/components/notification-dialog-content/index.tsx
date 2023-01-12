import React from "react";
import {Icon,Button} from 'dino_ui_tools'
import {unAssignRequestStatus} from "../../utils";
import useEvents from "../../hooks/use-events";
import {useNavigate} from "react-router";

type TNotificationDialogContent = {
  message: string,
  type:string
}
const NotificationDialogContent : React.FC<TNotificationDialogContent> = (props:TNotificationDialogContent ) => {

  const navigate = useNavigate();

  const {message = '', type } = props;
  const {setRequestStatus} = useEvents()

  const clickHandler = () => {
    setRequestStatus(unAssignRequestStatus());
    navigate('/');
  }

  return(
    <div>
      <Icon name='tick' size="small" color="inputBorderError" />
      <div>
        {message}

        <Button
          buttonText="Go to home page"
          type="primary"
          onClick={clickHandler}/>
      </div>
    </div>
  )
}

export default NotificationDialogContent
