import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {   }

  getUser(name: string):Observable<User>{
    const url = `https://api.github.com/users/${name}`;
    return this.http.get(url);   
  }
}
