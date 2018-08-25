// Type definitions for React Native Google Signin
// Project: https://github.com/react-native-community/react-native-google-signin
// Definitions by: React Native Google Signin Contributors

declare module 'react-native-google-signin' {
  import { GoogleSignin } from 'react-native-google-signin';

  export type ConfigureParams = {
    iosClientId?: string,
    offlineAccess?: boolean,
    webClientId?: string,
    scopes?: string[],
    hostedDomain?: string,
    forceConsentPrompt?: boolean,
    accountName?: string
  };

  export type HasPlayServicesParams = {
    showPlayServicesUpdateDialog: boolean
  };

  export type User = {
    idToken: string,
    accessToken: string | null,
    accessTokenExpirationDate: number | null, // DEPRECATED, on iOS it's a time interval since now in seconds, on Android it's always null
    serverAuthCode: string,
    scopes: string[], // on iOS this is empty array if no additional scopes are defined
    user: {
      email: string,
      id: string,
      givenName: string,
      familyName: string,
      photo: string, // url
      name: string // full name
    }
  }

  export type StatusCode = string | number;
  export interface StatusCodes {
    SIGN_IN_CANCELLED: StatusCode,
    IN_PROGRESS: StatusCode,
    PLAY_SERVICES_NOT_AVAILABLE: StatusCode
  }
  export const statusCodes: StatusCodes;

  export interface GoogleSignin {
    hasPlayServices(params?: HasPlayServicesParams): Promise<boolean>
    configure(params?: ConfigureParams): void
    signInSilently(): Promise<User>
    signIn(): Promise<User>
    signOut(): Promise<void>
    revokeAccess(): Promise<void>
  }
}