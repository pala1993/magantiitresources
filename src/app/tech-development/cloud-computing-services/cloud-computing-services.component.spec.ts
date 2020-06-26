import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudComputingServicesComponent } from './cloud-computing-services.component';

describe('CloudComputingServicesComponent', () => {
  let component: CloudComputingServicesComponent;
  let fixture: ComponentFixture<CloudComputingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudComputingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudComputingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
