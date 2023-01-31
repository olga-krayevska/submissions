import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { ELEMENT_DATA, TableData, IForm } from './table.constants';
import { MatSort } from '@angular/material/sort';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  sub: Subscription = new Subscription();

  index: number = 0;

  elenemtData = ELEMENT_DATA;

  displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'customer', 'date'];
  dataSource = new MatTableDataSource<TableData>(this.elenemtData);
  selection = new SelectionModel<TableData>(true, []);

  ngOnInit(): void {
    this.sub.add(this.formGroup.valueChanges.subscribe((val: IForm) => this.applyFilter(val)));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  applyFilter(value: IForm) {
    let data = this.elenemtData;
    if (value.status) {
      data = data.filter(item => item.status === value.status);
    }
    if (value.from) {
      data = data.filter(item => item.from === value.from);
    }
    if (value.date) {
      data = data.filter(item => item.date === value.date);
    }
    this.dataSource = new MatTableDataSource<TableData>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (value.search) this.dataSource.filter = value.search.trim().toLowerCase();


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
