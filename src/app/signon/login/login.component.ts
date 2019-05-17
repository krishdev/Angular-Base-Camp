import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialsService } from '../../appcommon/services/credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isFormSubmitted: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private service: CredentialsService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls};

  loginUser() {
    this.isFormSubmitted = true;
    this.successMessage = "";
    this.errorMessage = "";
    if(!this.loginForm.invalid) {
      this.service.loginUserApi(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        res=>{
          this.successMessage = "User Logged In";
        },
        err=> {
          this.errorMessage = err.error.error;
        }
      );
    }
  }

  resetValues() {
    this.isFormSubmitted = false;
    this.loginForm.reset();
  }

}
