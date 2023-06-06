
import { config } from 'dotenv'
import { EnvConfigType, userCredentialsType } from '../types'

//loading the .env file to process.env
config();

//mapping the enviroment configuration model for the tests
export const EnvConfig: EnvConfigType = {
    mainUrl: process.env.MAIN_URL || '',
    cookieConsent: process.env.COOKIE_CONSENT_NAME || '',
    cookieConsentValue: process.env.COOKIE_CONSENT_VALUE || '',
    cookieDomain : process.env.COOKIE_DOMAIN || '',
}

//Mapping the user credentials data model
export const userCredentials: userCredentialsType = {
    username: process.env.VALID_USERNAME || '',
    password: process.env.VALID_PASSWORD || ''
}

