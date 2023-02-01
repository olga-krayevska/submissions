import { StatusEnum } from '../../enums/enums';

export interface TableData {
  task: string
  status: StatusEnum.LowRisk | StatusEnum.Uncomplete | StatusEnum.Unasigned;
  from: string;
  to: string;
  customer: string;
  date: Date;
}

export interface IForm {
  search: string;
  from: string;
  status: string;
  component: string;
  date: Date;
}
