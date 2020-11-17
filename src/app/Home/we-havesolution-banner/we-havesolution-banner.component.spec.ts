import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeHavesolutionBannerComponent } from './we-havesolution-banner.component';

describe('WeHavesolutionBannerComponent', () => {
  let component: WeHavesolutionBannerComponent;
  let fixture: ComponentFixture<WeHavesolutionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeHavesolutionBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeHavesolutionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
