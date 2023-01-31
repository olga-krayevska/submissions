import { Component, forwardRef } from '@angular/core';
import { BaseControlValueAccessor } from '../value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DatepickerComponent)
    }
  ]
})
export class DatepickerComponent extends BaseControlValueAccessor<DatepickerComponent> {
  constructor() {
    super();
  }

}
