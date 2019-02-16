import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  exports:
    [
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatDatepickerModule,
      MatDialogModule
    ],
})
export class MaterialModule { }
