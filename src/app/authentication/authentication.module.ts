import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[LoginComponent,RegisterComponent]
})
export class AuthenticationModule { }
