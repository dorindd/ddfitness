import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitfooterComponent } from './fitfooter.component';

describe('FitfooterComponent', () => {
  let component: FitfooterComponent;
  let fixture: ComponentFixture<FitfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
