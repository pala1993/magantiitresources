import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReviewsComponent } from './clients-reviews.component';

describe('ClientsReviewsComponent', () => {
  let component: ClientsReviewsComponent;
  let fixture: ComponentFixture<ClientsReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
