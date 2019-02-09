import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports:
    [
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule
    ],
})
export class MaterialModule { }
