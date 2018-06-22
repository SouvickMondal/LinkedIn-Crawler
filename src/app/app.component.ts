import { Component } from '@angular/core';
import { LinkedInService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LinkedInService]
})
export class AppComponent {
  title = 'app';
}
