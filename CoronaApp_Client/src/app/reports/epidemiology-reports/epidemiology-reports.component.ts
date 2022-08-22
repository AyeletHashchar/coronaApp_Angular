import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from 'src/app/models/report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-epidemiology-reports',
  templateUrl: './epidemiology-reports.component.html',
  styleUrls: ['./epidemiology-reports.component.scss'],
})
export class EpidemiologyReportsComponent {
  reportsData: Report[] = [];

  displayedColumns: string[] = [
    'position',
    'userId',
    'startDate',
    'endDate',
    'city',
    'address',
  ];
  dataSource!: MatTableDataSource<Report>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private reportsService: ReportsService) {}

  ngAfterViewInit(): void {
    this.reportsService.getReports().subscribe(
      (res) => {
        this.reportsData = res;
        this.dataSource = new MatTableDataSource(this.reportsData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
