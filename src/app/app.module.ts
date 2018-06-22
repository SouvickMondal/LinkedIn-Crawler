import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CrawlerRankerComponent } from './crawler-ranker/crawler-ranker.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleGuard } from './sample-component/sample-component.guard.service';
import { LinkedInService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CrawlerRankerComponent,
    SampleComponentComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      {path:'project',component:CrawlerRankerComponent},
      {path:'projects',canActivate:[SampleGuard],component:SampleComponentComponent},
      {path:'**',component:AuthComponent}
    ])
  ],
  providers: [SampleGuard,LinkedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
