import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkthreeComponent } from './workthree.component';

describe('WorkthreeComponent', () => {
  let component: WorkthreeComponent;
  let fixture: ComponentFixture<WorkthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
