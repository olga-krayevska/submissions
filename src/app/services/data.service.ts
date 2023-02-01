import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ELEMENT_DATA } from './data.constats';
import { IForm, TableData } from '../components/table/table.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [...ELEMENT_DATA, ...ELEMENT_DATA, ...ELEMENT_DATA, ...ELEMENT_DATA, ...ELEMENT_DATA]

  constructor() { }

  getTableData(): Observable<any> {
    return of(this.data)
  }

  filtreDate(form: IForm): Observable<TableData[]> {
    let data = this.data;
    if (form.search) {
      data =  data.filter(item => item.task.indexOf(form.search) !== -1);
    }
    if (form.status) {
      data = data.filter(item => item.status === form.status);
    }
    if (form.from) {
      data = data.filter(item => item.from === form.from);
    }
    if (form.date) {
      data = data.filter(item => item.date === form.date);
    }

    return of(data)
  }


}
