import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  router: any;

  constructor() { }

  private apiUrl = "http://localhost:3000/users";
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }

}
