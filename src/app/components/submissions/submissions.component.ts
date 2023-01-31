import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StatusEnum } from '../../enums/enums';


@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({});

  fromList = [
    '123@3223.com',
    '1234@3223.com',
    '1235@3223.com',
    '1236@3223.com',
    '1237@3223.com',
    '123@ewq.com',
    '321@ewq.com',
    '1235@ewq.com',
  ]

  statusList = [
    StatusEnum.LowRisk,
    StatusEnum.Uncomplete,
    StatusEnum.Unasigned,
    StatusEnum.NeedsReview
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setFormGroupControls();
    this.formGroup.valueChanges.subscribe(val => console.log(val))
  }

  setFormGroupControls(): void {
    this.formGroup.setControl('search', this.fb.control(null));
    this.formGroup.setControl('from', this.fb.control(null));
    this.formGroup.setControl('status', this.fb.control(null));
    this.formGroup.setControl('component', this.fb.control('list'));
    this.formGroup.setControl('date', this.fb.control(null));

  }

  export() {
    console.log('export')
  }
}
