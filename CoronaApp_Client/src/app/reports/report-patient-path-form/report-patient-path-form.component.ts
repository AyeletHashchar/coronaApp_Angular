import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Report } from 'src/app/models/report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-report-patient-path-form',
  templateUrl: './report-patient-path-form.component.html',
  styleUrls: ['./report-patient-path-form.component.scss'],
  exportAs: 'reportForm',
})
export class ReportPatientPathFormComponent implements OnInit {
  showForm: boolean = true;
  datesError: boolean = false;

  reportForm = new FormGroup(
    {
      userId: new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(9),
          Validators.minLength(9),
        ],
      }),
      startDate: new FormControl('', { validators: [Validators.required] }),
      endDate: new FormControl('', { validators: [Validators.required] }),
      city: new FormControl('', { validators: [Validators.required] }),
      address: new FormControl('', { validators: [Validators.required] }),
    },
    {
      validators: [this.createDateRangeValidator()],
    }
  );

  constructor(private reportsService: ReportsService) {}

  errorMessage: string = '';

  ngOnInit(): void {}
  onFormSubmit() {
    let newReport: Report = {
      id: Math.round(Math.random() * 1000000000),
      userId: this.reportForm.value.userId ?? '',
      startDate: this.reportForm.value.startDate ?? new Date(),
      endDate: this.reportForm.value.endDate ?? new Date(),
      city: this.reportForm.value.city ?? '',
      address: this.reportForm.value.address ?? '',
    };

    this.reportsService.postReport(newReport).subscribe(
      (res) => {
        alert('Data saved successfully');
      },
      (err) => {
        console.log(err);
      }
    );
    this.showForm = false;
  }

  getError(control: string): string {
    switch (control) {
      case 'userId': {
        if (
          this.reportForm.controls['userId'].errors != null &&
          this.reportForm.controls['userId'].touched &&
          this.reportForm.controls['userId'].dirty
        ) {
          if (this.reportForm.controls['userId'].errors['required'])
            return 'User Id is required';
          if (this.reportForm.controls['userId'].errors['minlength'])
            return 'User Id is too short';
          if (this.reportForm.controls['userId'].errors['maxlength'])
            return 'User Id is too long';
        }
        break;
      }

      case 'startDate': {
        if (
          this.reportForm.controls['startDate'].errors != null &&
          this.reportForm.controls['startDate'].touched
        ) {
          return 'Start Date is required';
        }
        break;
      }
      case 'endDate': {
        if (
          this.reportForm.controls['endDate'].errors != null &&
          this.reportForm.controls['endDate'].touched
        ) {
          return 'End Date is required';
        }
        break;
      }
      case 'city': {
        if (
          this.reportForm.controls['city'].errors != null &&
          this.reportForm.controls['city'].touched
        ) {
          return 'City is required';
        }
        break;
      }
      case 'address': {
        if (
          this.reportForm.controls['address'].errors != null &&
          this.reportForm.controls['address'].touched
        ) {
          return 'Address is required';
        }
        break;
      }
      case 'datesRange': {
        return 'End date has to be after start date.';
      }

      default:
        return '';
    }
    return '';
  }

  openForm() {
    this.reportForm.reset();
    this.showForm = true;
  }

  createDateRangeValidator(): ValidatorFn {
    return (form: FormGroup | any): ValidationErrors | null => {
      const start: Date = form.get('startDate')?.value;

      const end: Date = form.get('endDate')?.value;

      if (start && end) {
        const isRangeValid = start < end;
        if (isRangeValid) {
          this.datesError = false;
          return null;
        } else {
          this.datesError = true;
        }
      }
      return null;
    };
  }
}
