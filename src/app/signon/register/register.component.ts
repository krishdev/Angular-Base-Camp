import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialsService } from '../../appcommon/services/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isFormSubmitted: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";


  constructor(
    private formBuilder: FormBuilder,
    private service: CredentialsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.comparePassword})
  }

  get f() { return this.registerForm.controls};

  registerUser() {
    this.successMessage = "";
    this.errorMessage = "";
    this.isFormSubmitted = true;
    if(!this.registerForm.invalid) {
      this.service.registerUserApi(this.registerForm.value.email, this.registerForm.value.password).subscribe(
        res=>{
          this.successMessage = "Registered Successfully";
          setTimeout(()=>{
            this.router.navigate(['profiles']);            
          }, 3000);
        },
        err=>{
          this.errorMessage = err.error.error;
        }
      )
    }
  }

  comparePassword(group: FormGroup) {
    let password = group.controls.password.value;
    let confirmPassword = group.controls.confirmPassword.value;
    let isTheSame: boolean = password === confirmPassword;
    const matchControl = group.controls['confirmPassword'];
    if(confirmPassword.trim() === "") return matchControl.setErrors({required: true});
    return isTheSame ? matchControl.setErrors(null) : matchControl.setErrors({notSame: true});
  }

  resetValues() {
    this.isFormSubmitted = false;
    this.registerForm.reset();
  }

}
