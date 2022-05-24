import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeworkoutComponent } from './timeworkout.component';

describe('TimeworkoutComponent', () => {
  let component: TimeworkoutComponent;
  let fixture: ComponentFixture<TimeworkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeworkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
