import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsofficialComponent } from './usofficial.component';

describe('UsofficialComponent', () => {
  let component: UsofficialComponent;
  let fixture: ComponentFixture<UsofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
