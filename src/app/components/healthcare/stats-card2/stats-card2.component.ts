import { Component, AfterViewInit } from '@angular/core';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-stats-card2',
  templateUrl: './stats-card2.component.html',
  styleUrls: ['./stats-card2.component.css']
})
export class StatsCard2Component implements AfterViewInit {

  constructor(private izReportParts: IzendaReportParts) {
  }
  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync('671B4538-B4EE-44D6-9FA2-CDC9496504FB', 'iForm-medicareenrollment-kpi1');
    this.izReportParts.renderReportPartAsync('2B7D6403-6F28-4DB7-A86A-7F7BDD7BDA77', 'iForm-uninsuredrate-kpi1');
    this.izReportParts.renderReportPartAsync('D0291396-06D1-403A-A294-2F8DB6C41CA5', 'iForm-coveragechange-kpi1');
    this.izReportParts.renderReportPartAsync('02883A16-68C0-48F8-9434-2A1BEC8B3224', 'iForm-medicaidstateexpand-kpi1');
  }
}
