import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-memento-mori-calendar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './memento-mori-calendar.component.html',
  styleUrl: './memento-mori-calendar.component.css'
})
export class MementoMoriCalendarComponent {
  numberOfYearsCtrl = new FormControl(100, {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });
  yearsLivedCtrl = new FormControl(0, {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  })
  colorCtrl = new FormControl();
  squares: number[][];
  weeksOnYear = 52;

  constructor() {
    this.squares = new Array(this.numberOfYearsCtrl.value).fill(0)
      .map(() => new Array(this.weeksOnYear).fill(0));
   }

  changeNumberOfYearsHandler() {
    if (this.numberOfYearsCtrl.valid) {
      const value = this.numberOfYearsCtrl.value;
      if (value > 0) {
        this.numberOfYearsCtrl.setValue(value);
        this.squares = new Array(this.numberOfYearsCtrl.value).fill(0)
          .map(() => new Array(this.weeksOnYear).fill(0));
      }
    }
  }

  changeYearsLivedHandler() {
    const value = this.yearsLivedCtrl.value;
    if (value > 0) {
      this.yearsLivedCtrl.setValue(value);
      this.squares = new Array(this.numberOfYearsCtrl.value).fill(0)
        .map((_, i) => i < this.yearsLivedCtrl.value 
        ? Array(this.weeksOnYear).fill(1) 
        : Array(this.weeksOnYear).fill(0));
    }
  }
}
