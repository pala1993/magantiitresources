import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDevelopmentServicesComponent } from './application-development-services.component';

describe('ApplicationDevelopmentServicesComponent', () => {
  let component: ApplicationDevelopmentServicesComponent;
  let fixture: ComponentFixture<ApplicationDevelopmentServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDevelopmentServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDevelopmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
