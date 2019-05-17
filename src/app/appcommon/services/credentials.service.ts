import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from '../models/users.models';
import { map } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  baseUrl: string = 'https://reqres.in/api/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  registerUserUrl = 'https://reqres.in/api/register';
  loginUserUrl = 'https://reqres.in/api/login';
  getAllUsers = 'https://reqres.in/api/users';

  public getApi(url:string, data: object) {
    let fetchUrl: string;
    switch (url) {
      case 'register': 
      fetchUrl = this.registerUserUrl;
      break;
      case 'login': 
      fetchUrl = this.loginUserUrl;
      break;
      case 'allUsers': 
      fetchUrl = this.getAllUsers;
      break;
    };
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options: any = {
      headers: headers
    };
    let params: any = new HttpParams();
    params = params.append('page', 1);
    params = params.append('per_page', 5);
    return this.http.request('get',fetchUrl, {params});
  }

  public getUsers(page: Number, per_page: Number) {
    let params: any = new HttpParams();
    params = params.append('page', 1);
    params = params.append('per_page', 5);
    return this.http.request('get', this.baseUrl + 'users', {params});
  }

  public registerUserApi (email: string, password: string) {
    return this.http.post(this.registerUserUrl, {email, password}).pipe(
      map(
        (res: any)=>{
          // setting token in local storage;
          localStorage.setItem('token', res.token);
        }
      )
    )
  }

  public loginUserApi (email: string, password: string) {
    return this.http.post(this.loginUserUrl, {email, password}).pipe(
      map(
        (res: any)=>{
          // setting token in local storage;
          localStorage.setItem('token', res.token);
          this.router.navigate(['profiles']);
        }
      )
    )
  }

  public isTokenValid () {

    let isTokenAvailable: boolean = false;

    isTokenAvailable = localStorage.getItem('token') ? true : false ;

    return isTokenAvailable;

  }

  public logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/signon/login']);
  }

}