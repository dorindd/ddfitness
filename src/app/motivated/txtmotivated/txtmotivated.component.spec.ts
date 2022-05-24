import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtmotivatedComponent } from './txtmotivated.component';

describe('TxtmotivatedComponent', () => {
  let component: TxtmotivatedComponent;
  let fixture: ComponentFixture<TxtmotivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtmotivatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtmotivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
