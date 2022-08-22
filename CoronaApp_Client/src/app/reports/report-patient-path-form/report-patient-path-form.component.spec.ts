import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientPathFormComponent } from './report-patient-path-form.component';

describe('ReportPatientPathFormComponent', () => {
  let component: ReportPatientPathFormComponent;
  let fixture: ComponentFixture<ReportPatientPathFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPatientPathFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPatientPathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
