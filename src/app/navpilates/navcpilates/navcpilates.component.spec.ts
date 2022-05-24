import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcpilatesComponent } from './navcpilates.component';

describe('NavcpilatesComponent', () => {
  let component: NavcpilatesComponent;
  let fixture: ComponentFixture<NavcpilatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcpilatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcpilatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
