
import {NavigateOptions, useNavigate} from "react-router-dom";

export const UseRedirect = () => {
  const navigate = useNavigate();

  const redirectTo = (path: string, state?: NavigateOptions ) => {
    navigate(path, state)
  }

  return {redirectTo}
}
