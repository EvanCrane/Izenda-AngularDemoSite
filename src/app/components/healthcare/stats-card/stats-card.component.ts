import { Component, AfterViewInit } from '@angular/core';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements AfterViewInit {

  constructor(private izReportParts: IzendaReportParts) {
  }
  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync('77BB6F77-80B9-46D5-BAA2-36FE7E452000', 'iForm-patientrating-kpi1');
    this.izReportParts.renderReportPartAsync('D0E43571-C3A9-4CB4-A02D-BD9960A3F969', 'iForm-averagerating-kpi1');
    this.izReportParts.renderReportPartAsync('97871AAA-3691-4687-AABE-752A7A0EC474', 'iForm-imagingefficiency-kpi1');
    this.izReportParts.renderReportPartAsync('1B90960D-97B4-4006-9F85-CB570AED428C', 'iForm-suppliers-kpi1');
  }
}
