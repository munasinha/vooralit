import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittingwordsSectionComponent } from './writtingwords-section.component';

describe('WrittingwordsSectionComponent', () => {
  let component: WrittingwordsSectionComponent;
  let fixture: ComponentFixture<WrittingwordsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittingwordsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittingwordsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
