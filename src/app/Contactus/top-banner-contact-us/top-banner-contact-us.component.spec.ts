import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerContactUsComponent } from './top-banner-contact-us.component';

describe('TopBannerContactUsComponent', () => {
  let component: TopBannerContactUsComponent;
  let fixture: ComponentFixture<TopBannerContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
