import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  isRegistrationSuccess: boolean = false;
  registerStatus: string = '';
  confirmStatus: string = '';

  phone_number: string = '';
  password: string = '';
  email: string = '';

  confirmationCode: string;

  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this._userService.registerSuccessEvent
      .subscribe( status => {
        this.registerStatus = status;
        this.isRegistrationSuccess = true;
      });

    this._userService.confirmationSuccessEvent
      .subscribe( status => {
        this.confirmStatus = status;
        setTimeout(() => {
          this.router.navigate['/login'];
        }, 1000);
      });
  }

  register() {
    const areAllFields: boolean = this.areAllFields({
      phone_number: this.phone_number,
      password: this.password,
      email: this.email
    });
    const hasMinLength: boolean = this.checkMinLength( this.password, 6 );

    if( !areAllFields )
      this.registerStatus = 'Input all fields.';
    else if( !hasMinLength )
      this.registerStatus = 'Password is too short.';
    else
      this._userService.register( this.phone_number, this.password, this.email );
  }

  confirm() {
    this._userService.confirmRegistration( this.phone_number, this.confirmationCode );
  }

  areAllFields( obj: any = {} ): boolean {
    console.log('areAllFields ', obj);
    let res = true;
    for( const prop in obj ) {
      if( !obj[prop] ) {
        res = false;
      }
    }
    return res;
  }
  checkMinLength( a: any, length: number ): boolean {
    let res = true;
    if( a.length < length )
      res = false;
    return res;
  }

}
