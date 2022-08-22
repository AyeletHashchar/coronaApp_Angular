import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientPathComponent } from './report-patient-path.component';

describe('ReportPatientPathComponent', () => {
  let component: ReportPatientPathComponent;
  let fixture: ComponentFixture<ReportPatientPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPatientPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPatientPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
