import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInvoiceComponent } from './latest-invoice.component';

describe('LatestInvoiceComponent', () => {
  let component: LatestInvoiceComponent;
  let fixture: ComponentFixture<LatestInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
