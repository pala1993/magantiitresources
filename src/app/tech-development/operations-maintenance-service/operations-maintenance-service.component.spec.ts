import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsMaintenanceServiceComponent } from './operations-maintenance-service.component';

describe('OperationsMaintenanceServiceComponent', () => {
  let component: OperationsMaintenanceServiceComponent;
  let fixture: ComponentFixture<OperationsMaintenanceServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsMaintenanceServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsMaintenanceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
