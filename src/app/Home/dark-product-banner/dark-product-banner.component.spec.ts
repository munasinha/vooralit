import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkProductBannerComponent } from './dark-product-banner.component';

describe('DarkProductBannerComponent', () => {
  let component: DarkProductBannerComponent;
  let fixture: ComponentFixture<DarkProductBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkProductBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
