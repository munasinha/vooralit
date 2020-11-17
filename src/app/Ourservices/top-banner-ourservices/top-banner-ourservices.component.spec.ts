import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerOurservicesComponent } from './top-banner-ourservices.component';

describe('TopBannerOurservicesComponent', () => {
  let component: TopBannerOurservicesComponent;
  let fixture: ComponentFixture<TopBannerOurservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerOurservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerOurservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
