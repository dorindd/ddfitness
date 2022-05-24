import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesshomeComponent } from './fitnesshome.component';

describe('FitnesshomeComponent', () => {
  let component: FitnesshomeComponent;
  let fixture: ComponentFixture<FitnesshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnesshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnesshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
