import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-report-patient-path',
  templateUrl: './report-patient-path.component.html',
  styleUrls: ['./report-patient-path.component.scss'],
})
export class ReportPatientPathComponent implements OnInit {
  counter: number = 0;

  userId: string = '';
  reports: Report[] = [];

  newStartDate: Date = new Date();
  newEndDate: Date = new Date();
  newCity: string = '';
  newAddress: string = '';

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.reportsService.getReports().subscribe(
      (res) => {
        this.counter = res.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getReports(): void {
    this.reportsService.getReportsById(this.userId).subscribe(
      (res) => {
        this.reports = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addReport(): void {
    let newReport: Report = {
      id: this.counter++,
      startDate: this.newStartDate,
      endDate: this.newEndDate,
      city: this.newCity,
      address: this.newAddress,
      userId: this.userId,
    };

    this.reportsService.postReport(newReport).subscribe(
      (res) => {
        alert('Data saved successfully');
        this.getReports();
      },
      (err) => {
        console.log(err);
      }
    );

    this.initInputs();
  }

  RemoveReport(reportId: number): void {
    this.reportsService.removeReport(reportId).subscribe(
      (res) => {
        alert('Data removed successfully');
        this.getReports();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  initInputs(): void {
    this.newStartDate = new Date();
    this.newEndDate = new Date();
    this.newCity = '';
    this.newAddress = '';
  }
}
