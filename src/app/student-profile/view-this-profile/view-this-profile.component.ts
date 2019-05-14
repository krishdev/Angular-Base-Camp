import { Component, OnInit } from '@angular/core';
import { GetAllUsersService } from '../../appcommon/services/index.services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-this-profile',
  templateUrl: './view-this-profile.component.html',
  styleUrls: ['./view-this-profile.component.scss']
})
export class ViewThisProfileComponent implements OnInit {

  user: any = {};
  thisUserId: number;

  constructor(
    private allUserService: GetAllUsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {      
      this.thisUserId = +params['userid'];
    });
  }

  ngOnInit() {
    debugger;
    let allusers: any = [];
    if(this.allUserService.hasUserDataLoaded) {
      allusers = this.allUserService.getAllUsers();
      this.findTheCurrentUser(allusers);
    } else {
      this.allUserService.getAllUsersFromApi().subscribe(
        res => {
          allusers = res;
          this.findTheCurrentUser(allusers);
        }
      )
    }    
  }

  findTheCurrentUser(allusers) {
    for(let i = 0; i < allusers.length ; i++) {
      if(allusers[i].id === this.thisUserId) {
        this.user = allusers[i];
        break;
      }
    }
  }


  goToViewAllPage() {
    this.router.navigate(['/profiles/view-all/']);
  }

  editThisUser(id: number) {
    this.router.navigate(['/profiles/view-all/edit/', id]);
  }
}
