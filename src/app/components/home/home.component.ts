import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allUsers: any;
  propertyName: string = '';
  noRecords = false;
  showAddUser = false;
  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/home') {
          this.showAddUser = false;
          this.getUsers();
        } else {
          this.showAddUser = true;
        }
      }
    })
  }

  ngOnInit(): void {

  }
  getUsers() {
    this.allUsers = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('userData'))));
    this.allUsers.results.forEach((element: any) => {
      console.log(element)
    });
  }
  addUser() {
    this.router.navigate(['./add-user'], { relativeTo: this.route.parent })
  }

}
