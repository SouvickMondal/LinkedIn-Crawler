import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable()
export class LinkedInService {
    private _clientId:string = '812ur0qdvv7epp';
    private _clientSecret:string = 'hrUSurZtYzpbmzW7';
    private _redirectUrl:string = 'http%3A%2F%2Flocalhost%3A4200%2Fproject';
    code: string;
    state: string;
    demo:any;
    commentElement:any;
    // token:string='';
    constructor(private _http: HttpClient, private _route: Router) {

    }

    

    authorize() {
        const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${this._clientId}&redirect_uri=${this._redirectUrl}&state=DCFeFWf45A53sdfKef424`;
        console.log(url);
        return url;
    }
    getAccessToken() {
        let url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${this.code}&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fproject&client_id=812ur0qdvv7epp&client_secret=hrUSurZtYzpbmzW7`;
        fetch(url, {
            method: 'post',
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log('Access Token Retrieved:', data);
            localStorage.setItem('currentUser', JSON.stringify(data));
            // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            // letoken = currentUser.access_token; 
            this._route.navigate(['projects']);
        });

    }
    async getProfileData(){
        let res;
        let url = 'https://api.linkedin.com/v1/people/~?format=json';
        let access_token = JSON.parse(localStorage.getItem('currentUser')).access_token;
        let authString = 'Bearer '+access_token;

        url = url+'&oauth2_access_token='+access_token;
        var request = new Request(url, {
            method:'get',
        });

        await fetch(request).then((response)=>{
           return response.json();
        }).then((res)=>{
            this.demo=res;
        });
        return this.demo;
        
    }
    setCode(code, state): void {
        this.code = code;
        this.state = state;
        this.getAccessToken();
    }

    async fetchComments(postUrl:string){
        let ind = postUrl.lastIndexOf(':');
        let url = 'https://www.linkedin.com/pulse-fe/api/v1/comments?urn=urn:li:activity:'+postUrl.slice(ind+1,postUrl.length);
        console.log(url);
        await fetch(url,{
            method:'get',
        }).then((response)=>{
            return response.json();
        }).then((res)=>{
            console.log(res);
            this.commentElement = res;
        });
        return this.commentElement;
    }
}