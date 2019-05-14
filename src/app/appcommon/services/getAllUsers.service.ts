import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users} from '../models/users.models';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  private usersSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  allUsers: any = this.usersSource.asObservable();
  hasUserDataLoaded: boolean = false;

  constructor(private http: HttpClient) {
    this.getAllUsersFromApi();
  }

  public getAllUsersFromApi() {
    return this.http.get<Users[]>( "https://jsonplaceholder.typicode.com/users" )
      .pipe(map(users => {
        this.hasUserDataLoaded = true;
        if(users && users.length) {
          let allUsersTemp = users.map((item: any)=> {
            item.age = Math.floor(Math.random() * (35-18)) + 18;
            return item;
          });
          this.usersSource.next(allUsersTemp);
          return allUsersTemp;
        }
        else return [];
      }))
  }

  public updateUsersData(users: any) {
    this.usersSource.next(users);
  }

  public getAllUsers() {
    return this.usersSource.value;
  }

  public findThisUserById(id: number) {
    let user = {};
    let allUserLength = this.usersSource.value.length;
    for(let i = 0; i < allUserLength; i++) {
      if(this.usersSource.value[i].id === id) {
        user = this.usersSource.value[i];
        break;
      }
    }
    return user;
  }

}