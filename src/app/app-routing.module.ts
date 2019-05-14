import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule', data: { state: 'home' } },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
  { path: 'register', loadChildren: './signon/signon.module#SignonModule' },
  { path: 'profiles', loadChildren: './student-profile/student-profile.module#StudentProfileModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  constructor(){}
}