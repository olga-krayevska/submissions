import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IForm, TableData } from '../interfaces/data';
import * as moment from 'moment';
import { ELEMENT_DATA } from '../constants/data.constats';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [...ELEMENT_DATA, ...ELEMENT_DATA, ...ELEMENT_DATA, ...ELEMENT_DATA, ...ELEMENT_DATA]

  getTableData(): Observable< TableData[]> {
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
      data = data.filter(item => item.date.split('T')[0] === moment(form.date).format('YYYY-MM-DD'));
    }

    return of(data)
  }


}
