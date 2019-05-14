import { Component, OnInit, ViewChild, SimpleChange } from '@angular/core';
import { CredentialsService } from '../../appcommon/services/credentials.service';
import { Users } from '../../appcommon/models/users.models';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  email: String = "";
  phoneNumber: String = "";

  isFormSubmitted = false;

  validations: any = {
    email: false,
    phoneNumber: false
  };

  constructor(
    private services: CredentialsService
  ) { }

  users = new Array<Users>();
  userOptions = {
    page: 1,
    per_page: 5    
  };

  ngOnInit() {
    this.services.getUsers(1, 5).subscribe(
      (response:any)=>{
        this.users = response.data;
      }
    )
  }

  onSubmit() {
    this.isFormSubmitted = true;
    let isValidObj = this.validateFields();
    const isValid = isValidObj.email && isValidObj.phoneNumber;
    if(isValid) {
      console.log("Submitting the form");
    }
  }

  validateFields() {
    let email = this.email.trim();
    let emailRegx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email != "" && emailRegx.test(email)) {
      this.validations.email = true;
    } else {
      this.validations.email = false;
    }


    let phoneNumber = this.phoneNumber.trim();

    if(phoneNumber != "" && phoneNumber.length > 8 && phoneNumber.length <= 12) {
      this.validations.phoneNumber = true;
    } else {
      this.validations.phoneNumber = false;
    }

    return this.validations;

  }

}
