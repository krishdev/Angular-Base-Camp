import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeRoutingModule } from './home-routes.module';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  declarations: [HomeComponentComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
