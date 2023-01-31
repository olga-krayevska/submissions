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

export const ELEMENT_DATA: TableData[] = [
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.Unasigned, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'task', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.Uncomplete, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.Uncomplete, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'task', status: StatusEnum.Unasigned, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'task', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.Unasigned, from: '1235@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.Unasigned, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow2', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip2', date: new Date()},
  { task: 'task2', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip3', date: new Date()},
  { task: 'workflow', status: StatusEnum.Uncomplete, from: '1235@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow2', status: StatusEnum.Unasigned, from: '123@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
  { task: 'workflow', status: StatusEnum.LowRisk, from: '1235@ewq.com', to: '321@ewq.com', customer: 'pip', date: new Date()},
];
