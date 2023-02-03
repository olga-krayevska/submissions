import { StatusEnum } from '../../core/enums/enums';

export interface TableData {
  task: string
  status: StatusEnum.LowRisk | StatusEnum.Uncomplete | StatusEnum.Unasigned;
  from: string;
  to: string;
  customer: string;
  date: string;
}

export interface IForm {
  search: string;
  from: string;
  status: string;
  component: string;
  date: Date;
}
