import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/Models/User';
import {filter, switchMap, debounceTime, catchError, startWith} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  findControl =new FormControl();
  error: boolean = false;
  user: User = {};
  us:boolean =false;
  constructor(private githubService: GithubService) { }

  
  onSearch(event: any) {
    const nombreUsuario = event.target.value;
    this.githubService.getUser(nombreUsuario).pipe(
      catchError(err => {
      this.user = {};
      this.error = true;
      this.us =false;
      return EMPTY;
      })
    )
    .subscribe( data=> {this.user =data
      if (data) {
        this.user = data;
        this.us = true;
        console.log(data);
      } 
    });
     }
     
  ngOnInit(): void {

  }
 

}
