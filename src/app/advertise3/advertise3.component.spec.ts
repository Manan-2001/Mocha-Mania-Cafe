import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertise3Component } from './advertise3.component';

describe('Advertise3Component', () => {
  let component: Advertise3Component;
  let fixture: ComponentFixture<Advertise3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Advertise3Component]
    });
    fixture = TestBed.createComponent(Advertise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
