import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({});

  formList = [
    '123@3223.com',
    '1234@3223.com',
    '1235@3223.com',
    '1236@3223.com',
    '1237@3223.com',
  ]

  statusList = [
    'Low Risk',
    'Uncomplete',
    'Unassigned'
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setFormGroupControls();
    this.formGroup.valueChanges.subscribe(val => console.log(val))
  }

  setFormGroupControls(): void {
    this.formGroup.setControl('form', this.fb.control(null));
    this.formGroup.setControl('status', this.fb.control(null));
    this.formGroup.setControl('component', this.fb.control('list'));

  }

  export() {

  }
}
