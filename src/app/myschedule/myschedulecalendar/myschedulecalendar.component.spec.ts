import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyschedulecalendarComponent } from './myschedulecalendar.component';

describe('MyschedulecalendarComponent', () => {
  let component: MyschedulecalendarComponent;
  let fixture: ComponentFixture<MyschedulecalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyschedulecalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyschedulecalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
