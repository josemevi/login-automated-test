import { EnvConfig } from '../config';

//function used to set the privacy cookie with the values from the .env file
export async function setCookieVals() {

    let cookies = [
        {
          name: EnvConfig.cookieConsent, 
          value: EnvConfig.cookieConsentValue, 
          domain:EnvConfig.cookieDomain,
          path: '/'
        } 
    ]
  
    return cookies;
  }