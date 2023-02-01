import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { TableData, IForm } from './table.constants';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;

  sub: Subscription = new Subscription();

  index: number = 0;

  elementData: TableData[] = [];

  displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'customer', 'date'];
  dataSource = new MatTableDataSource<TableData>([]);
  selection = new SelectionModel<TableData>(true, []);
  size: number = 10;
  pageIndex: number = 0;
  curPage: number = 0;
  paginateItems = `1-${this.size}`
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.sub.add(this.formGroup.valueChanges.subscribe((val: IForm) => this.applyFilter(val)));
    this.sub.add(this.dataService.getTableData().subscribe( tabData => {
      this.elementData = tabData;
      this.dataSource = new MatTableDataSource<TableData>(tabData.slice(0, this.size));
    }))
  }

   ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  paginate(event: any) {
    this.curPage = event;
    this.pageIndex=event;
    this.paginateItems = `${event * this.size - this.size + 1}-${event * this.size}`
    this.dataSource = new MatTableDataSource<TableData>(
      this.elementData.slice(event * this.size - this.size, event * this.size)
    );
  }

  applyFilter(value: IForm) {
    this.sub.add(this.dataService.filtreDate(value).subscribe(data => {
        this.elementData = data;
        this.curPage = 0;
        this.dataSource = new MatTableDataSource<TableData>(data.slice(0, this.size));
      }
    ))


  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }


}
