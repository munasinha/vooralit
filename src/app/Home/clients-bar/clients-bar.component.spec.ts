import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsBarComponent } from './clients-bar.component';

describe('ClientsBarComponent', () => {
  let component: ClientsBarComponent;
  let fixture: ComponentFixture<ClientsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
