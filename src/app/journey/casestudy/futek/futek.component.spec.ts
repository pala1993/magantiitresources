import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutekComponent } from './futek.component';

describe('FutekComponent', () => {
  let component: FutekComponent;
  let fixture: ComponentFixture<FutekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
