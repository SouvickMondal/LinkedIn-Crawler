import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class SampleGuard implements CanActivate{
    constructor(private _route : Router){}
    canActivate():boolean{
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = currentUser.access_token;
        if(!token){
            this._route.navigate(['']);
            return false;
        }
        else{
            console.log(token);
            return true;
        }
    }
}