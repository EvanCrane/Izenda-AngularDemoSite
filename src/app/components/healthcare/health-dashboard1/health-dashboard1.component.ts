import { Component, AfterViewInit } from '@angular/core';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-health-dashboard1',
  templateUrl: './health-dashboard1.component.html',
  styleUrls: ['./health-dashboard1.component.css']
})
export class HealthDashboard1Component implements AfterViewInit {

  constructor(private izReportParts: IzendaReportParts) { }

  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync('99899D70-D0DF-48E2-A2BC-DBEE9B5FE4EE', 'iChart-geninfo-emergencyservices');
    this.izReportParts.renderReportPartAsync('5E1602B3-5687-4242-A9E6-5857F3C0425B', 'iChart-geninfo-chart1');
    this.izReportParts.renderReportPartAsync('C93A2E3F-5AEE-4EF5-9D68-BFD81D95B2B0', 'iChart-geninfo-chart2');
    this.izReportParts.renderReportPartAsync('350735BA-626E-4AEA-9521-229F5057F1D9', 'iChart-payment-estimatescatter');
    this.izReportParts.renderReportPartAsync('7C27673D-4F8F-43B9-9E04-4688D8A75567', 'iChart-geninfo-hospitaltype');
    this.izReportParts.renderReportPartAsync('4DD32D98-8D48-435F-A4DE-934E8E0CC558', 'iChart-geninfo-hospitalownership');
  }

}
