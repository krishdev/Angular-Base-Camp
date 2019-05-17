import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './signon-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormLabelDirective } from '../directives/form-label.directive';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, FormLabelDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SignonModule { }
