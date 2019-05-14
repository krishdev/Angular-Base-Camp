import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './signon-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class SignonModule { }
