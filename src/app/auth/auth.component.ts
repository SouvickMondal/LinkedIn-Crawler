import { Component, OnInit } from '@angular/core';
import { LinkedInService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public linkdinLogin= '';

  constructor(private linkedInService: LinkedInService,private _route:Router) { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if(currentUser){
      let token = currentUser.access_token;
      if(token){
        this._route.navigate(['projects']);
      }
      else{
        this.linkdinLogin = this.linkedInService.authorize();
      }
    }
    else{
      this.linkdinLogin = this.linkedInService.authorize();
    }
  }

}
