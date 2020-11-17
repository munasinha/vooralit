import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightProductBannerComponent } from './light-product-banner.component';

describe('LightProductBannerComponent', () => {
  let component: LightProductBannerComponent;
  let fixture: ComponentFixture<LightProductBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightProductBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
