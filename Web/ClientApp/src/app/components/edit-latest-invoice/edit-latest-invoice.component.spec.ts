import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLatestInvoiceComponent } from './edit-latest-invoice.component';

describe('EditLatestInvoiceComponent', () => {
  let component: EditLatestInvoiceComponent;
  let fixture: ComponentFixture<EditLatestInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLatestInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLatestInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
