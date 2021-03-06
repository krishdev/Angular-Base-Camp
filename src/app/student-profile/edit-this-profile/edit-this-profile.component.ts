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
  ) { 
    this.route.params.subscribe(
      params=>{
        this.thisUserId = parseInt(params['userid']);
      }
    )
  }

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
      email: [ this.user.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: [ this.user.phone, [Validators.required, Validators.minLength(8)]],
      website: [ this.user.website, [Validators.required, Validators.pattern(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)]
          ]    })
  }


  get f() {
    return this.userForm.controls;
  }
  
  editUser() {
    if(this.userForm.invalid===false) {
      let allUserData = this.allUserService.getAllUsers();
      for(let i = 0; i < allUserData.length ; i++) {
        if(this.user.id === allUserData[i].id) {
          allUserData[i].email = this.userForm.value.email;
          allUserData[i].phone = this.userForm.value.phone;
          allUserData[i].website = this.userForm.value.website;
          break;
        }
      }
      this.allUserService.updateUsersData(allUserData);
      this.router.navigate(['/profiles/view-all/', this.thisUserId]);
    }
  }

  resetValues() {
    this.userForm.reset();
  }

  goToViewAllPage() {
    this.router.navigate(['/profiles/view-all/']);
  }

  viewThisUser(id: number) {
    this.router.navigate(['/profiles/view-all/', id]);
  }

  validateWebsiteUrl(group: FormGroup) {
    let isValid = group.controls.website.value.match(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(isValid) {
      return group.controls.website.setErrors(null);
    } else {
      return group.controls.website.setErrors({
        websiteNotValid: true
      })
    }
    
  }

}
