import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public createUserForm!: FormGroup;
  allUsers: any;
  users = {  user : {
    name: {},
    email: null,
    gender: null,
    phone: null,
    password: null,
    username: null,
  }}
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createUserForm = this.formbuilder.group({
      gender: new FormControl(null, []),
      title: new FormControl(null,),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null,  [Validators.required]),
      user_name: new FormControl(null),
      password: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null, []),
    });
  }
  createUser() {
    if (!this.createUserForm.valid) {
      return;
    }
    this.users.user = {
      email: this.createUserForm.value.email,
      name : { title: this.createUserForm.value.tittle,
        first: this.createUserForm.value.first_name,
        last: this.createUserForm.value.last_name,
      },
      gender: this.createUserForm.value.gender,
      username: this.createUserForm.value.user_name,
      password: this.createUserForm.value.password,
      phone: this.createUserForm.value.phone
    }
    this.allUsers = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('userData'))));
    this.allUsers.results.push(this.users)
    localStorage.removeItem('userData');
    localStorage.setItem('userData', JSON.stringify(this.allUsers));
    this.allUsers.results.forEach((element: any) => {
      console.log(element)
    });
    this.router.navigate(['./home']);
  }
}
