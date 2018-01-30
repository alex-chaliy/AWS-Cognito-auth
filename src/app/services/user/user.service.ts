import { Injectable } from '@angular/core';

import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';

import { UserPoolClient, IdentityPool } from './cognito-config';
import { EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

  userPool: CognitoUserPool;

  registerSuccessEvent: EventEmitter<string> = new EventEmitter();
  confirmationSuccessEvent: EventEmitter<string> = new EventEmitter();
  loginSuccessEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.userPool = new CognitoUserPool( UserPoolClient );
  }

  register( phone_number: string, password: string, email: string ) {
    const phoneAttrribute = {
      Name: 'phone_number',
      Value: phone_number
    };
    const nameAttrribute = {
      Name: 'email',
      Value: email
    };
    const userAttributes = [
      new CognitoUserAttribute( phoneAttrribute ),
      new CognitoUserAttribute( nameAttrribute ),
    ];

    this.userPool.signUp( phone_number, password, userAttributes, null, (err, result) => {
      if (err) {
        console.log('There was an error ', err);
        alert(err);
      } else {
        const text = 'Confirm your phone below.';
        console.log( text );
        this.registerSuccessEvent.emit( text );
      }
    });
  }

  confirmRegistration( phone_number: string, code: string ) {
    const userData = {
      Username: phone_number,
      Pool: this.userPool
    };

    const cognitoUser = new CognitoUser( userData );

    cognitoUser.confirmRegistration( code, true, (err, result) => {
      if (err) {
        console.log('There was an error -> ', err)
        alert(err);
      } else {
        const text = 'You have been confirmed.';
        console.log( text );
        this.confirmationSuccessEvent.emit( text );
      }
    })
  }

  login( phone_number: string, password: string ) {
    const authData = {
      Username: phone_number,
      Password: password
    };
    const authDetails = new AuthenticationDetails( authData );
    const userData = {
      Username: phone_number,
      Pool: this.userPool
    };
    const cognitoUser = new CognitoUser( userData );

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        const text = 'You has been logged in.'
        console.log( text );
        this.loginSuccessEvent.emit( text );
      },
      onFailure: (err) => {
        console.log('There was an error during login, please try again -> ', err);
        alert('Cannot Login. It seems your phone was not confirmed.');
      }
    })
  }
  
  logoutUser() {
    this.userPool.getCurrentUser().signOut();
  }

}
