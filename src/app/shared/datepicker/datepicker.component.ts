import { Component, forwardRef } from '@angular/core';
import { BaseControlValueAccessor } from '../value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

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
  constructor( private domSanitizer: DomSanitizer,
               public matIconRegistry: MatIconRegistry) {
    super();
    this.matIconRegistry.addSvgIcon("calendar", this.setPath(`/assets/icons/calendar.svg`));
  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
