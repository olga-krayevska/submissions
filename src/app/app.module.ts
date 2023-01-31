import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SubmissionsComponent } from './components/submissions/submissions.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { SelectListComponent } from './shared/select-list/select-list.component';
import { DatepickerComponent } from './shared/datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HistoryComponent } from './components/history/history.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { IconComponent } from './shared/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MapComponent } from './components/map/map.component';
import { StatusBarComponent } from './shared/status-bar/status-bar.component';
import { CardComponent } from './components/card/card.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionsComponent,
    SearchInputComponent,
    TableComponent,
    SelectListComponent,
    DatepickerComponent,
    HeaderComponent,
    FormsComponent,
    CustomersComponent,
    HistoryComponent,
    ReportsComponent,
    WorkflowComponent,
    IconComponent,
    MapComponent,
    StatusBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
