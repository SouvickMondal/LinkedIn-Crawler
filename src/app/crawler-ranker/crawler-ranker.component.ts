import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkedInService } from '../app.service';

@Component({
  selector: 'app-crawler-ranker',
  templateUrl: './crawler-ranker.component.html',
  styleUrls: ['./crawler-ranker.component.css']
})
export class CrawlerRankerComponent implements OnInit {
  code: string;
  state: string;
  constructor(private _route: ActivatedRoute, private linkedInService: LinkedInService) { }

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      this.code = params['code'];
      this.state = params['state'];
      this.linkedInService.setCode(this.code, this.state);
    });
  }

}
