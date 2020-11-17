import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurservicesLayoutComponent } from './ourservices-layout.component';

describe('OurservicesLayoutComponent', () => {
  let component: OurservicesLayoutComponent;
  let fixture: ComponentFixture<OurservicesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurservicesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurservicesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
