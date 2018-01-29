import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';

// Page Modules
import { LoginPageModule } from './login-page/login-page.module';
import { ProfileModule } from './profile/profile.module'; // profile pages
import { RegisterPageModule } from './register-page/register-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,

    AppRoutingModule,

    // Page Modules
    LoginPageModule,
    ProfileModule, // profile pages
    RegisterPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
