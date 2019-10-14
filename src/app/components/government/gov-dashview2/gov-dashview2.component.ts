import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DomService } from '../../../services/dom.service';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-gov-dashview2',
  templateUrl: './gov-dashview2.component.html',
  styleUrls: ['./gov-dashview2.component.css']
})
export class GovDashview2Component implements OnInit, AfterViewInit {

  rParts: any = {
    part1: {
      rpId: '50F0C9BB-C743-4859-994B-539CF94D4508',
      containerId: 'ATL-MHI-CHART1',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part2: {
      rpId: '42020E11-2C3A-4029-B57F-FE8D3DDE53A7',
      containerId: 'ATL-MHISUMMARY-KPI',
      rootId: 'MHISUMMARY',
      loading: false
    },
  };
  constructor(private domService: DomService, private izReportParts: IzendaReportParts) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync(this.rParts.part1.rpId, this.rParts.part1.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part2.rpId, this.rParts.part2.containerId);
  }
}
