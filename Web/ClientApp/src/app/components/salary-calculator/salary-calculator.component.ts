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

  constructor() { }

  ngOnInit() {
  }

  public calculateTotal(): void {
    let decimalMinutes: number;
    if (this.minutesWorked) {
      decimalMinutes = this.minutesWorked / 60;
    }

    this.total = (this.hoursWorked + decimalMinutes) * this.hourlyRate;
  }

}
