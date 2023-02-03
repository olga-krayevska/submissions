import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { saveAs } from "file-saver";
import { mergeMap, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { StatusEnum } from '../../enums/enums';
import { TableData } from '../table/table.constants';


@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit, OnDestroy{
  formGroup: FormGroup = this.fb.group({});
  tableData: TableData[] = [];
  sub: Subscription = new Subscription();

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

  get statusList() {
    return this.formGroup.get('component')?.value === 'list' ? [
      StatusEnum.LowRisk,
      StatusEnum.Uncomplete,
      StatusEnum.Unasigned,
    ] : [
      StatusEnum.LowRisk,
      StatusEnum.Uncomplete,
      StatusEnum.NeedsReview
    ]
  }
  constructor(private fb: FormBuilder, private dataService: DataService) {
  }

  ngOnInit() {
    this.setFormGroupControls();
    this.sub.add(this.dataService.getTableData().subscribe(data => this.tableData = data));
    this.sub.add(this.formGroup.valueChanges.pipe(
      mergeMap(val => {
        return this.dataService.filtreDate(val)
      })
    ).subscribe(val => {
      this.tableData = val
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setFormGroupControls(): void {
    this.formGroup.setControl('search', this.fb.control(null));
    this.formGroup.setControl('from', this.fb.control(null));
    this.formGroup.setControl('status', this.fb.control(null));
    this.formGroup.setControl('component', this.fb.control('list'));
    this.formGroup.setControl('date', this.fb.control(null));
  }

  export() {
    const svg = this.convertToCsv(this.tableData);
    const blob: Blob = new Blob([svg], {
      type: "text/csv;charset=utf-8"
    });
    saveAs(blob, "submssions.csv");
  }

  convertToCsv(data: TableData[]){
    const csvString = [
      [ 
        "customer",
        "date",
        "from",
        "status",
        "task",
        "to"
      ],
      ...data.map(item => [
        item.customer,
        item.date,
        item.from,
        item.status,
        item.task,
        item.to
      ])
    ]
     .map(e => e.join(",")) 
     .join("\n"); 
     
    return csvString;
  }
}
