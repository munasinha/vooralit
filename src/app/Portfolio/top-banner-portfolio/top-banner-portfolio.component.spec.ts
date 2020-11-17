import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerPortfolioComponent } from './top-banner-portfolio.component';

describe('TopBannerPortfolioComponent', () => {
  let component: TopBannerPortfolioComponent;
  let fixture: ComponentFixture<TopBannerPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
