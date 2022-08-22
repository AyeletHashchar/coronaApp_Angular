import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpidemiologyReportsComponent } from './epidemiology-reports.component';

describe('EpidemiologyReportsComponent', () => {
  let component: EpidemiologyReportsComponent;
  let fixture: ComponentFixture<EpidemiologyReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpidemiologyReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpidemiologyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
