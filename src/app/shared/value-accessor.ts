import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {

  subscription: Subscription = new Subscription();
  formControl: FormControl = new FormControl();
  formControlHasInitValue = false;

  onTouched: () => void = () => {console.log()};

  writeValue(v: unknown): void {
    this.formControl.setValue(v);
    this.formControlHasInitValue = !!v;
  }

  registerOnChange(fn: (v: unknown) => void): void {
    this.subscription.add(this.formControl.valueChanges.pipe().subscribe((val) => fn(val)));
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled
      ? this.formControl.disable()
      : this.formControl.enable();
  }
}
