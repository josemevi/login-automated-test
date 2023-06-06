import { EnvConfig } from '../config';

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