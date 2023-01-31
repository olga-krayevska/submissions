import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

export interface TableData {
  task: string
  status: 'low' | 'uncomplete' | 'unassigned';
  from: string;
  to: string;
  customer: string;
  date: Date;
}

const ELEMENT_DATA: TableData[] = [
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'unassigned', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'uncomplete', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'uncomplete', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'unassigned', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'unassigned', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'unassigned', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow2', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip2', date: new Date()},
  { task: 'workflow2', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip3', date: new Date()},
  { task: 'workflow', status: 'uncomplete', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow2', status: 'unassigned', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: 'low', from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'customer', 'date'];
  dataSource = new MatTableDataSource<TableData>(ELEMENT_DATA);
  selection = new SelectionModel<TableData>(true, []);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.task}`;
  }

}
