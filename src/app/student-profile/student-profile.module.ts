import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllComponent } from './show-all/show-all.component';
import { ViewThisProfileComponent } from './view-this-profile/view-this-profile.component';
import { EditThisProfileComponent } from './edit-this-profile/edit-this-profile.component';

import { ProfileRoutingModule } from './profile-routing.module';
import { GetAllUsersService } from '../appcommon/services/getAllUsers.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowAllComponent, ViewThisProfileComponent, EditThisProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ GetAllUsersService ]
})
export class StudentProfileModule { }
