import { Component, OnInit, ViewChild, SimpleChange } from '@angular/core';
import { CredentialsService } from '../../appcommon/services/credentials.service';
import { Users } from '../../appcommon/models/users.models';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  myTech: Array<string> = ['HTML5', 'CSS3', 'JS', 'jQuery', 'Angular', 'SCSS', 'ITSCSS', 'flexbox', 'REST-API'];
  toggleTech: string = 'HTML5';

  constructor(
    private services: CredentialsService
  ) { }

  ngOnInit() {
    let i = 0;
    let techLength = this.myTech.length;
    let interval = setInterval(()=> {
      this.toggleTech = this.myTech[i];
      i++;
      if(i == techLength) clearInterval(interval);
    }, 1500)
  }

  
}
