import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';

// Page Modules
import { LoginPageModule } from './login-page/login-page.module';
import { ProfileModule } from './profile/profile.module'; // profile pages
import { RegisterPageModule } from './register-page/register-page.module';

// UI-elements
import { TopNavModule } from './ui-elements/top-nav/top-nav.module';

// Services
import { UserService } from './services/user/user.service';
import { MenuService } from './services/menu/menu.service';


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
    RegisterPageModule,

    // UI-elements
    TopNavModule
  ],
  providers: [
    UserService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
