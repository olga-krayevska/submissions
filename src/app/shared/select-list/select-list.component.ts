import { Component, forwardRef, Input } from '@angular/core';
import { BaseControlValueAccessor } from '../value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectListComponent)
    }
  ]
})
export class SelectListComponent extends BaseControlValueAccessor<SelectListComponent> {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() list!: string[];

  constructor() {
    super();
  }

}
