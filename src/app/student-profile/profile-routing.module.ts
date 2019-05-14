import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllComponent } from './show-all/show-all.component';
import { ViewThisProfileComponent } from './view-this-profile/view-this-profile.component';
import { EditThisProfileComponent } from './edit-this-profile/edit-this-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-all', pathMatch: 'full' },
  { path: 'view-all', component: ShowAllComponent },
  { path: 'view-all/:userid', component: ViewThisProfileComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
