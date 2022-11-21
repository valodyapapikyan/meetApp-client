import React, { useEffect, useState } from 'react';
import axios from  'axios';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  const REDIRECT_URL = `/auth/authorize/google`
  const url = `http://localhost:2020/google/authorize/url?redirectUrl=${REDIRECT_URL}`;

  const [redirectUrl, setRedirectUrl] = useState("")

  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      // handle success
      setRedirectUrl(response.data.data.URL);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, []);

  return (
    <div className="App">
      {redirectUrl ? <a href={redirectUrl}> google auth  </a> : null}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
