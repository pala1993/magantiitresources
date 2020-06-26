import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateGivingComponent } from './corporate-giving.component';

describe('CorporateGivingComponent', () => {
  let component: CorporateGivingComponent;
  let fixture: ComponentFixture<CorporateGivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateGivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
