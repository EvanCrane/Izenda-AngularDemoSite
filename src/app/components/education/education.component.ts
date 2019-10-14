import { Component, AfterViewInit } from '@angular/core';
import { DomService } from '../../services/dom.service';
import { IzendaReportParts } from '../../helpers/izenda.reportparts';

@Component({
  selector: 'app-edu-dashview2',
  templateUrl: './edu-dashview2.component.html',
  styleUrls: ['./edu-dashview2.component.css']
})
export class EducationDashview2Component implements AfterViewInit {

  rParts: any = {
    part1: {
      rpId: 'F01EBD44-B5F5-441D-9876-9E737F1F5ABD',
      containerId: 'iForm-gradeStatsKPI1-kpi',
      rootId: 'gradeStatsKPI1',
      loading: false
    },
    part2: {
      rpId: '960D5960-47EA-4F18-9F95-AE48B18DD1F7',
      containerId: 'iForm-gradeStatsKPI2-kpi',
      rootId: 'gradeStatsKPI2',
      loading: false
    },
    part3: {
      rpId: 'AE7A89BB-A412-4631-AE5D-BAB6808C3A35',
      containerId: 'iChart-nurserySchoolKpi1-scatter',
      rootId: 'nurserySchoolKpi1',
      loading: false
    },
    part4: {
      rpId: '79E3D298-1033-4B7F-BAD7-C712F65E7197',
      containerId: 'iChart-nurserySchoolKpi2-line',
      rootId: 'nurserySchoolKpi2',
      loading: false
    },
    part5: {
      rpId: 'F124ACE6-DFCE-464C-BB4C-6F2626EED36F',
      containerId: 'iForm-NurserySchoolMotherWorkingStat-chart',
      rootId: 'izenda-chart',
      loading: false
    },
    part6: {
      rpId: '74F38017-65D6-43C5-9E7F-9465C01CEFBE',
      containerId: 'iForm-GradStatsChart1-chart',
      rootId: 'highcharts-background',
      loading: false
    },
    part7: {
      rpId: '0ECCA3D4-2CE7-499D-BEBF-656C21521B27',
      containerId: 'iForm-4thGradeStateMathScoresMap-map',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part8: {
      rpId: 'E5328FC6-C1FE-44CB-8CDD-183E102B964E',
      containerId: 'iForm-top52017math4thgradegrid-grid',
      rootId: 'izenda-ReportPartFrontSideViewer-container',
      loading: false
    },
    part9: {
      rpId: '1D6D8FFE-9438-4356-BDE1-A7911701666F',
      containerId: 'iForm-PrimarySchoolChart1-chart',
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
    this.loadParts(this.rParts.part1.rootId, 'cardB1', 'loaderB1');
    this.loadParts(this.rParts.part2.rootId, 'cardB2', 'loaderB2');
    this.loadParts(this.rParts.part3.rootId, 'cardB3', 'loaderB3');
    this.loadParts(this.rParts.part4.rootId, 'cardB4', 'loaderB4');

    // Rest of Reports
    this.izReportParts.renderReportPartAsync(this.rParts.part5.rpId, this.rParts.part5.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part6.rpId, this.rParts.part6.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part7.rpId, this.rParts.part7.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part8.rpId, this.rParts.part8.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part9.rpId, this.rParts.part9.containerId);
    this.loadChartParts(this.rParts.part5.rootId, 'cardB5', 'loaderB5');
    this.loadChartParts(this.rParts.part6.rootId, 'cardB6', 'loaderB6');
    this.loadChartParts(this.rParts.part7.rootId, 'cardB7', 'loaderB7');
    this.loadChartParts(this.rParts.part8.rootId, 'cardB8', 'loaderB8');
    this.loadChartParts(this.rParts.part9.rootId, 'cardB9', 'loaderB9');
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
    this.domService.checkElementExistanceByClassDelayed(rootId).then(result => this.prepareStatCard(cardId, loaderId));
  }

  private async prepareStatCard(cardId: string, loaderId: string) {
    const loader = document.getElementById(loaderId);
    const card = document.getElementById(cardId);
    loader.classList.add('hidden');
    card.classList.remove('card-inactive');
    card.classList.add('card-active');
    console.log('loader hidden and card shown');
  }

}
