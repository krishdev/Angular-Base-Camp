import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private service: CredentialsService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if(!this.service.isTokenValid()) {
      this.router.navigate(['/signon/login']);
      return false;
    }
    return true;
  }
}
