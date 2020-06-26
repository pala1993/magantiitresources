import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTrainingComponent } from './tech-training.component';

describe('TechTrainingComponent', () => {
  let component: TechTrainingComponent;
  let fixture: ComponentFixture<TechTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
