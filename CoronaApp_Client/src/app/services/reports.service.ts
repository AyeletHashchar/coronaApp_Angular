import { Injectable } from '@angular/core';
import { Report } from '../models/report';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  private base = 'https://localhost:44381/api/';

  constructor(private http: HttpClient) {}

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.base}Location`);
  }

  getReportsById(id: string): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.base}Location/patientId/` + id);
  }

  postReport(newReport: Report): Observable<any> {
    return this.http.post(`${this.base}Location`, newReport);
  }

  removeReport(reportId: number): Observable<any> {
    return this.http.delete(`${this.base}Location/` + reportId);
  }

  getUserName(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base}User/userName`);
  }

  // userExists(id: string): boolean {
  //   let flag: boolean = false;
  //   this.usersData.forEach((u) => {
  //     if (u?.id == id) {
  //       flag = true;
  //       return;
  //     }
  //   });
  //   return flag;
  // }

  postUser(newUser: User): Observable<any> {
    return this.http.post(`${this.base}User`, newUser);
  }
}
