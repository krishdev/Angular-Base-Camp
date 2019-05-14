import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAllUsersService } from '../../appcommon/services/index.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-this-profile',
  templateUrl: './edit-this-profile.component.html',
  styleUrls: ['./edit-this-profile.component.scss']
})
export class EditThisProfileComponent implements OnInit {

  user: any = {};
  thisUserId: number;
  userForm: FormGroup;

  constructor(
    private allUserService: GetAllUsersService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if(this.allUserService.hasUserDataLoaded) {
      this.user = this.allUserService.findThisUserById(this.thisUserId);
      this.initFormBuilder();
    } else {
      this.allUserService.getAllUsersFromApi().subscribe(
        res=>{
          this.user = this.allUserService.findThisUserById(this.thisUserId);
          this.initFormBuilder();
        }
      )
    }    
  }

  initFormBuilder() {
    // Initializing 
    this.userForm = this.formBuilder.group({
      name: [ this.user.name, Validators.required],
      username: [ this.user.username, Validators.required],
      email: [ this.user.email, [Validators.required, Validators.email]],
      phone: [ this.user.phone, [Validators.required, Validators.minLength(8)]],
      website: [ this.user.website, [Validators.required]]
    })
  }
  
  editUser() {

  }

  goToViewAllPage() {
    this.router.navigate(['/profiles/view-all/']);
  }

  viewThisUser(id: number) {
    this.router.navigate(['/profiles/view-all/', id]);
  }

}
