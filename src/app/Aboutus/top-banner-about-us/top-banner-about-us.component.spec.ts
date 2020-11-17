import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerAboutUsComponent } from './top-banner-about-us.component';

describe('TopBannerAboutUsComponent', () => {
  let component: TopBannerAboutUsComponent;
  let fixture: ComponentFixture<TopBannerAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
