import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancetxtComponent } from './enhancetxt.component';

describe('EnhancetxtComponent', () => {
  let component: EnhancetxtComponent;
  let fixture: ComponentFixture<EnhancetxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancetxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancetxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
