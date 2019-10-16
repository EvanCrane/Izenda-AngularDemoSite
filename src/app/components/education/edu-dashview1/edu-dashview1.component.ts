import { Component, AfterViewInit } from '@angular/core';
import { DomService } from '../../../services/dom.service';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-edu-dashview1',
  templateUrl: './edu-dashview1.component.html',
  styleUrls: ['./edu-dashview1.component.css']
})
export class EduDashview1Component implements AfterViewInit {

  rParts: any = {
    part1: {
      rpId: '38261372-C27A-411F-9BE9-2116ABB64CED',
      containerId: 'iForm-educationalAttainmentKpi1-kpi',
      rootId: 'educationalAttainmentKpi1',
      loading: false
    },
    part2: {
      rpId: '5B4539C0-FA1B-4A09-AC6B-CB23ADB6978F',
      containerId: 'iForm-educationalAttainmentKpi2-kpi',
      rootId: 'educationalAttainmentKpi2',
      loading: false
    },
    part3: {
      rpId: 'CD9F29DC-27DA-44DA-9562-46EEA5F89E23',
      containerId: 'iForm-eduAttainmentPercentKpi1-kpi',
      rootId: 'eduAttainmentPercentKpi1',
      loading: false
    },
    part4: {
      rpId: '65AC7BE6-CCCD-4A0C-8C8B-E0CF732CA873',
      containerId: 'iForm-collegeEnrollmentKpi1-kpi',
      rootId: 'collegeEnrollmentKpi1',
      loading: false
    },
    part5: {
      rpId: '3ADC9151-88D4-414B-B9A3-14C61E9CB684',
      containerId: 'iForm-EducationalAttainment16-18Char-chart',
      rootId: 'izenda-chart',
      loading: false
    },
    part6: {
      rpId: '5F0C174D-9F82-470E-9725-F773D2359D3B',
      containerId: 'iForm-EduAttainmentDegreePie1-chart',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part7: {
      rpId: 'E0BDA219-D6AF-4A8D-AFD2-562CC590EE8C',
      containerId: 'iForm-CollegeEnrollmentChart1-chart',
      rootId: 'izenda-chart',
      loading: false
    },
    part8: {
      rpId: 'B1B0E14B-DDE6-42DC-B2FE-86ACFDB20ED4',
      containerId: 'iForm-PopularMajorTable1-grid',
      rootId: 'izenda-grid-chart',
      loading: false
    },
    part9: {
      rpId: '68B550E9-8A48-4E51-BC40-A628CC7EEBB2',
      containerId: 'iForm-eduAttainmentMap1-map',
      rootId: 'izenda-Scrollbox',
      loading: false
    }
  };
  constructor(private domService: DomService, private izReportParts: IzendaReportParts) { }

  ngAfterViewInit() {
    this.prepareDashboardReports();
  }

  public prepareDashboardReports() {
    // Stat Cards
    this.izReportParts.renderReportPartAsync(this.rParts.part1.rpId, this.rParts.part1.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part2.rpId, this.rParts.part2.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part3.rpId, this.rParts.part3.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part4.rpId, this.rParts.part4.containerId);
    this.loadParts(this.rParts.part1.rootId, 'cardA1', 'loaderA1');
    this.loadParts(this.rParts.part2.rootId, 'cardA2', 'loaderA2');
    this.loadParts(this.rParts.part3.rootId, 'cardA3', 'loaderA3');
    this.loadParts(this.rParts.part4.rootId, 'cardA4', 'loaderA4');

    // Rest of reports
    this.izReportParts.renderReportPartAsync(this.rParts.part5.rpId, this.rParts.part5.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part6.rpId, this.rParts.part6.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part7.rpId, this.rParts.part7.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part8.rpId, this.rParts.part8.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part9.rpId, this.rParts.part9.containerId);
    this.loadChartParts(this.rParts.part4.rootId, 'cardA5', 'loaderA5');
    this.loadChartParts(this.rParts.part6.rootId, 'cardA6', 'loaderA6');
    this.loadChartParts(this.rParts.part7.rootId, 'cardA7', 'loaderA7');
    this.loadChartParts(this.rParts.part8.rootId, 'cardA8', 'loaderA8');
    this.loadChartParts(this.rParts.part9.rootId, 'cardA9', 'loaderA9');
  }

  public updateDashboardReports() {
    this.izReportParts.renderReportPartAsync(this.rParts.part9.rpId, this.rParts.part9.containerId);

    this.izReportParts.renderReportPartAsync(this.rParts.part5.rpId, this.rParts.part5.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part6.rpId, this.rParts.part6.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part7.rpId, this.rParts.part7.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part8.rpId, this.rParts.part8.containerId);


  }


  private async loadParts(rootId: string, cardId: string, loaderId: string) {
    this.domService.checkElementExistanceByIdDelayed(rootId).then(result => this.prepareStatCard(cardId, loaderId))
      .catch(result => console.log('Could not hide loader: Result: ' + result));
  }

  private async loadChartParts(rootId: string, cardId: string, loaderId: string) {
    this.domService.checkElementExistanceByClassDelayed(rootId).then(result => this.prepareStatCard(cardId, loaderId))
      .catch(result => console.log('Could not hide loader: Result: ' + result));
  }

  private async prepareStatCard(cardId: string, loaderId: string) {
    const loader = document.getElementById(loaderId);
    const card = document.getElementById(cardId);
    if (loader !== null && card !== null) {
      loader.classList.add('hidden');
      card.classList.remove('card-inactive');
      card.classList.add('card-active');
      console.log('loader hidden and card shown');
    } else { console.log('loader could not be hidden and card loaded'); }
  }
}
