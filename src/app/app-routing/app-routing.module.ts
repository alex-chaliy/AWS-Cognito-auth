import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/** Page Components
 */
  import { LoginPageComponent } from '../login-page/login-page/login-page.component';
  import { RegisterPageComponent } from '../register-page/register-page/register-page.component';
  import { ProfileEditComponent } from '../profile/profile-edit/profile-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', redirectTo: '/profile/edit', pathMatch: 'full' },
  { path: 'profile/edit', component: ProfileEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
