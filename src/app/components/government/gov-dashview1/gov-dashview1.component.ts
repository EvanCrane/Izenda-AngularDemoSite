import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DomService } from '../../../services/dom.service';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-gov-dashview1',
  templateUrl: './gov-dashview1.component.html',
  styleUrls: ['./gov-dashview1.component.css']
})
export class GovDashview1Component implements OnInit, AfterViewInit {

  rParts: any = {
    part1: {
      rpId: 'AF84DA78-03DE-4E7F-A693-01FD05C54FB0',
      containerId: 'ATL-POPULATION-KPI',
      rootId: 'POPULATION',
      loading: false
    },
    part2: {
      rpId: '659D5688-B253-4554-AC3F-ED8D53F5C7F3',
      containerId: 'ATL-MHI-KPI',
      rootId: 'MEDIAN_HOUSE_INCOME',
      loading: false
    },
    part3: {
      rpId: '3BF190F6-4141-4161-866A-D713A4E35725',
      containerId: 'ATL-EMPLOYEES-KPI',
      rootId: 'NUMBER_EMPLOYEES',
      loading: false
    },
    part4: {
      rpId: 'DFD3C644-73ED-4CAF-B82E-68632FCF7646',
      containerId: 'ATL-MPV-KPI',
      rootId: 'MEDIAN_PROPERTY_VALUE',
      loading: false
    },
    part5: {
      rpId: 'EE29740B-8582-4149-BBD7-0297717826B9',
      containerId: 'ATL-POVERTY-KPI',
      rootId: 'POVERTY_RATE',
      loading: false
    },
    part6: {
      rpId: '22DEA4D6-1DE0-40A1-8948-D2F9896A270A',
      containerId: 'ATL-MEDIANAGE-KPI',
      rootId: 'MEDIAN_AGE',
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
    this.izReportParts.renderReportPartAsync(this.rParts.part5.rpId, this.rParts.part5.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part6.rpId, this.rParts.part6.containerId);
  }
}
