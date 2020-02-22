import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {
  hoursWorked: number;
  minutesWorked: number;
  hourlyRate: number;
  total: number;
  invalidInputs: boolean;

  constructor() { }

  ngOnInit() {
  }

  public calculateTotal(): void {
    if (this.hoursWorked < 0 || this.minutesWorked < 0 || this.hourlyRate < 0) {
      this.invalidInputs = true;
      return;
    }

    let decimalMinutes: number;
    if (this.minutesWorked) {
      decimalMinutes = this.minutesWorked / 60;
    }

    if (decimalMinutes !== undefined) {
      this.total = (this.hoursWorked + decimalMinutes) * this.hourlyRate;
    } else {
      this.total = this.hoursWorked * this.hourlyRate;
    }
  }

}
