import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './common/header/header.component';
//import { FooterComponent } from './common/footer/footer.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { CredentialsService } from '../app/appcommon/services/credentials.service';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
