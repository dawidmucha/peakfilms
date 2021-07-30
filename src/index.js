import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="process.env.REACT_APP_SITE_KEY">
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);