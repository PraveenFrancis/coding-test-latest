import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public readonly http: HttpClient,
  ) { }

  getAllUsers() {
    const url = environment.userUrl
    if(!localStorage.getItem('userData')) {
      this.http.get(url).subscribe( data => {
        localStorage.setItem('userData', JSON.stringify(data))
      });
    }
  }
  
}
