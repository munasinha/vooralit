import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusLayoutComponent } from './aboutus-layout.component';

describe('AboutusLayoutComponent', () => {
  let component: AboutusLayoutComponent;
  let fixture: ComponentFixture<AboutusLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
