import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApplicationServicesComponent } from './mobile-application-services.component';

describe('MobileApplicationServicesComponent', () => {
  let component: MobileApplicationServicesComponent;
  let fixture: ComponentFixture<MobileApplicationServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileApplicationServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApplicationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
