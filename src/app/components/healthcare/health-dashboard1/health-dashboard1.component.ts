import { Component, AfterViewInit } from '@angular/core';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-health-dashboard1',
  templateUrl: './health-dashboard1.component.html',
  styleUrls: ['./health-dashboard1.component.css']
})
export class HealthDashboard1Component implements AfterViewInit {
  rParts: any = {
    part1: {
      rpId: '708C1B06-43D8-4FE2-9FBF-FAE9BA9AB5A2',
      containerId: 'iForm-totalpayments-kpi',
      rootId: null,
      loading: false
    },
    part2: {
      rpId: '15A5491B-7ED1-4C55-9AFA-07A5E912C003',
      containerId: 'iForm-averagepayment-kpi',
      rootId: null,
      loading: false
    },
    part3: {
      rpId: '350735BA-626E-4AEA-9521-229F5057F1D9',
      containerId: 'iChart-paymentestimate-scatter',
      rootId: null,
      loading: false
    },
    part4: {
      rpId: 'C2E2A8DC-4522-43DD-A425-B536B34AB979',
      containerId: 'iChart-avgpayment-line',
      rootId: null,
      loading: false
    },
    part5: {
      rpId: '6B8844B5-8B3E-4FD2-A6C9-1D98E88E7E49',
      containerId: 'iChart-hospitalrating-line',
      rootId: null,
      loading: false
    }
  }

  constructor(private izReportParts: IzendaReportParts) { }

  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync(this.rParts.part1.rpId, this.rParts.part1.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part2.rpId, this.rParts.part2.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part3.rpId, this.rParts.part3.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part4.rpId, this.rParts.part4.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part5.rpId, this.rParts.part5.containerId);
  }
}
