import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlerRankerComponent } from './crawler-ranker.component';

describe('CrawlerRankerComponent', () => {
  let component: CrawlerRankerComponent;
  let fixture: ComponentFixture<CrawlerRankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerRankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerRankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
