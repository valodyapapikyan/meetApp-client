import React from "react";
import { createRoot } from "react-dom/client";
import GoogleScreen from '../pages/google-oauth2-screen/index';
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";

//google/authorize/url
//

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "/auth/authorize/provider",
    element: <GoogleScreen/>,
  },
]);


