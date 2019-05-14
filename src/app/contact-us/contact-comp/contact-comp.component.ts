import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-comp',
  templateUrl: './contact-comp.component.html',
  styleUrls: ['./contact-comp.component.scss']
})
export class ContactCompComponent implements OnInit {

  studentForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor( 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    let email = this.getValueFromSessionStorage("email");
    let phoneNumber = this.getValueFromSessionStorage("phoneNumber");
    
    this.studentForm = this.formBuilder.group({
      email: [ email ? email : '', [Validators.required, Validators.email]],
      phoneNumber: [ phoneNumber ? phoneNumber : '', [Validators.required, Validators.minLength(8)]]
    })
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit() {

    this.isFormSubmitted = true;

    if(!this.studentForm.invalid) {
      sessionStorage.setItem("email", this.studentForm.value.email);
      sessionStorage.setItem("phoneNumber", this.studentForm.value.phoneNumber);
      
      // before calling an api you store it in sessionStorage so that even if user 
      // accidentally loose their prefilled data like on browser refresh it can be fetched from session storage

    }

  }

  getValueFromSessionStorage(key) {
    return sessionStorage.getItem(key) || false;
  }

  setValueToSessionStorage(key, value) {
    if(key && value!=null) {
      sessionStorage.setItem(key, value);
    }
  }

}
