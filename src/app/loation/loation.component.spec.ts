import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoationComponent } from './loation.component';

describe('LoationComponent', () => {
  let component: LoationComponent;
  let fixture: ComponentFixture<LoationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoationComponent]
    });
    fixture = TestBed.createComponent(LoationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
