import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseInvoiceDialogComponent } from './close-invoice-dialog.component';

describe('CloseInvoiceDialogComponent', () => {
  let component: CloseInvoiceDialogComponent;
  let fixture: ComponentFixture<CloseInvoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseInvoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
