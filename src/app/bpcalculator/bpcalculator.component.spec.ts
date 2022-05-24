import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpcalculatorComponent } from './bpcalculator.component';

describe('BpcalculatorComponent', () => {
  let component: BpcalculatorComponent;
  let fixture: ComponentFixture<BpcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpcalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
