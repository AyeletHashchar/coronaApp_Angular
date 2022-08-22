import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPatientPathComponent } from './report-patient-path/report-patient-path.component';
import { ReportPatientPathFormComponent } from './report-patient-path-form/report-patient-path-form.component';
import { ReportsService } from '../services/reports.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EpidemiologyReportsComponent } from './epidemiology-reports/epidemiology-reports.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'ReportPatientPath', component: ReportPatientPathComponent },
  { path: 'ReportPatientPathForm', component: ReportPatientPathFormComponent },
  { path: 'EpidemiologyReports', component: EpidemiologyReportsComponent },
];

@NgModule({
  declarations: [
    ReportPatientPathComponent,
    ReportPatientPathFormComponent,
    EpidemiologyReportsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [ReportsService],
})
export class ReportsModule {}
