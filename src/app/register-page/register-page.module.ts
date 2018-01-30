import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RegisterPageComponent]
})
export class RegisterPageModule { }
