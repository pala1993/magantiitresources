import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStaffingComponent } from './tech-staffing.component';

describe('TechStaffingComponent', () => {
  let component: TechStaffingComponent;
  let fixture: ComponentFixture<TechStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
