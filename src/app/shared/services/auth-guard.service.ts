import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  userData: any;
  constructor(private readonly httpClient: HttpClient) { }
  public canActivate(): Observable<boolean> {
    this.httpClient.get("assets/user.json").subscribe(data => {
      console.log(data);
      this.userData = data;
    });
    return of(this.userData &&
      localStorage.getItem('userName') === this.userData.username &&
      localStorage.getItem('password') === this.userData.password)
  }
}
