import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from './contractor.routes';
import { RouterModule } from '@angular/router';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [
    SalaryCalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    MaterialModule
  ]
})
export class ContractorModule { }
