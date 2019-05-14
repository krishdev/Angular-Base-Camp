import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllUsersService } from '../../appcommon/services/getAllUsers.service';


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {

  allUsersUnTouched: any = [];
  allUsers: any = [];
  link = '<a href="">Click here</a>';
  hasDataLoaded: boolean = false;
  ageFilter: any = "";

  constructor(
    private allUserService: GetAllUsersService,
    private router: Router
  ) { }

  ngOnInit() {
    const url = "https://jsonplaceholder.typicode.com/users";
    //fetch all users
    this.hasDataLoaded = false;

    this.allUserService.getAllUsersFromApi().subscribe(
      res => {
        this.hasDataLoaded = true;
        this.allUsers = res;
        this.allUsersUnTouched = res;
      },
      err => {
        console.log("errors");
        console.log(err)
      }
    )

  }

  onView (id) {
    this.router.navigate(['/profiles/view-all/', id]);
  }

  toggleAsc: any = {
    name: false,
    age: false,
    phone: false,
    email: false
  };
  sortBy(key) {
    let sortKey = key.toLowerCase();
    this.allUsers.sort((a,b)=>{

      let aConverted = a[sortKey].toLowerCase();
      let bConverted = b[sortKey].toLowerCase();

      let compare: number = 0;
      if(!this.toggleAsc[sortKey]) {
        if(aConverted > bConverted) compare = 1;
        if(aConverted < bConverted) compare = -1;
      } else {
        if(aConverted < bConverted) compare = 1;
        if(aConverted > bConverted) compare = -1;
      }      
      return compare;
    });
    this.toggleAsc[sortKey] = !this.toggleAsc[sortKey]
  }

  filterByAge() {
    let tempUsers = this.allUsersUnTouched.filter((item)=>{
      if(this.ageFilter == 0 && item.age >= 18 && item.age <= 25) {
        return item;
      } else if(this.ageFilter == 1 && item.age >= 26 && item.age <= 35) {
        return item;
      } else if(this.ageFilter == 2) {
        return item
      }
    });
    this.allUsers = tempUsers;
  }

}
