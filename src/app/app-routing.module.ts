import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { FormsComponent } from './components/forms/forms.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HistoryComponent } from './components/history/history.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { ReportsComponent } from './components/reports/reports.component';

export enum RouteEnum {
  Submissions = 'Submissions',
  Forms = 'Forms',
  Customers = 'Customers',
  History = 'History',
  Reports = 'Reports',
  Workflow = 'Workflow'
}

const routes: Routes = [
  { path: '',  redirectTo: 'Submissions', pathMatch: 'full' },
  { path: 'Submissions', component: SubmissionsComponent },
  { path: 'Forms', component: FormsComponent },
  { path: 'Customers', component: CustomersComponent },
  { path: 'History', component: HistoryComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'Workflow', component: WorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
