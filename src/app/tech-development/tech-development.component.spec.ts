import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDevelopmentComponent } from './tech-development.component';

describe('TechDevelopmentComponent', () => {
  let component: TechDevelopmentComponent;
  let fixture: ComponentFixture<TechDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
