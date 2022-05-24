import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanksyouComponent } from './tanksyou.component';

describe('TanksyouComponent', () => {
  let component: TanksyouComponent;
  let fixture: ComponentFixture<TanksyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanksyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanksyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
