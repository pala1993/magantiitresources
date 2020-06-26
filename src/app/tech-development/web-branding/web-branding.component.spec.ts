import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBrandingComponent } from './web-branding.component';

describe('WebBrandingComponent', () => {
  let component: WebBrandingComponent;
  let fixture: ComponentFixture<WebBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
