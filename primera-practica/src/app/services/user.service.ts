import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
