import { Component, OnInit } from '@angular/core';
import { LinkedInService } from '../app.service';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

  profileData : any;
  postUrl:any;
  postData:any;
  comments:any[]=[];
  constructor(private linkedinService :LinkedInService) { }

  async ngOnInit() {
    this.profileData = await this.linkedinService.getProfileData();
    
  }

  async setPostUrl(url){
    console.log("Subitterd");
    this.postUrl = url.target.value;
    this.postData = await this.linkedinService.fetchComments(this.postUrl);
    console.log(this.postData); 
    for (let i=0;i<this.postData['elements'].length;i++){
      this.comments.push(this.postData['elements'][i]['commenter']['name']);
    }
  }

}
