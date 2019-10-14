import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DomService } from '../../../services/dom.service';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-gov-dashview3',
  templateUrl: './gov-dashview3.component.html',
  styleUrls: ['./gov-dashview3.component.css']
})
export class GovDashview3Component implements OnInit, AfterViewInit {
  rParts: any = {
    part1: {
      rpId: 'BCAE4504-C9F8-4A6C-A88E-D4CC4BABFB4D',
      containerId: 'ATL-WAGEGENDER-CHART1',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part2: {
      rpId: 'CE4CF60D-89C7-47C4-942C-61381B0849DB',
      containerId: 'ATL-HIGHESTPAY-GRID',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part3: {
      rpId: '17B69367-B91F-4822-83CE-AE168F4D3921',
      containerId: 'ATL-TRADE2015-CHART1',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part4: {
      rpId: '207CB8B1-E3E0-4018-9F64-8452896B580C',
      containerId: 'ATL-TRADEGROWTH-CHART1',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
  };
  constructor(private domService: DomService, private izReportParts: IzendaReportParts) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync(this.rParts.part1.rpId, this.rParts.part1.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part2.rpId, this.rParts.part2.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part3.rpId, this.rParts.part3.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part4.rpId, this.rParts.part4.containerId);
  }

}
