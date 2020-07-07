import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurorcComponent } from './curorc.component';

describe('CurorcComponent', () => {
  let component: CurorcComponent;
  let fixture: ComponentFixture<CurorcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurorcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
