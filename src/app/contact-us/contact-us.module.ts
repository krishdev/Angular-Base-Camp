import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactCompComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
