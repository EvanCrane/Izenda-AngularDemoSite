import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DomService } from '../../../services/dom.service';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';
import { slideIn } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-stats-card3',
  templateUrl: './stats-card3.component.html',
  styleUrls: ['./stats-card3.component.css']
})
export class StatsCard3Component implements OnInit, AfterViewInit {
  rParts: any = {
    part1: {
      rpId: '1B90960D-97B4-4006-9F85-CB570AED428C',
      containerId: 'iForm-suppliers-kpi1',
      rootId: 'iz-supplierskpi1',
      loading: false
    },
    part2: {
      rpId: '77BB6F77-80B9-46D5-BAA2-36FE7E452000',
      containerId: 'iForm-patientrating-kpi1',
      rootId: 'iz-patientsurveyratingkpi1',
      loading: false
    },
    part3: {
      rpId: 'D0E43571-C3A9-4CB4-A02D-BD9960A3F969',
      containerId: 'iForm-averagerating-kpi1',
      rootId: 'izenda-rp-gen1',
      loading: false
    },
    part4: {
      rpId: '97871AAA-3691-4687-AABE-752A7A0EC474',
      containerId: 'iForm-imagingefficiency-kpi1',
      rootId: 'iz-imagingefficiencykpi1',
      loading: false
    }

  };
  constructor(private domService: DomService, private izReportParts: IzendaReportParts) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync(this.rParts.part1.rpId, this.rParts.part1.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part2.rpId, this.rParts.part2.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part3.rpId, this.rParts.part3.containerId);
    this.izReportParts.renderReportPartAsync(this.rParts.part4.rpId, this.rParts.part4.containerId);

    this.loadParts(this.rParts.part1.rootId, 'stat-card1', 'card-loader1');
    this.loadParts(this.rParts.part2.rootId, 'stat-card2', 'card-loader2');
    this.loadParts(this.rParts.part3.rootId, 'stat-card3', 'card-loader3');
    this.loadParts(this.rParts.part4.rootId, 'stat-card4', 'card-loader4');
  }

  async loadParts(rootId: string, cardId: string, loaderId: string) {
    this.domService.checkElementExistanceByIdDelayed(rootId).then(result => this.prepareStatCard(cardId, loaderId));
  }

  async prepareStatCard(cardId: string, loaderId: string) {
    const loader = document.getElementById(loaderId);
    const card = document.getElementById(cardId);
    loader.classList.add('hidden');
    card.classList.remove('card-inactive');
    card.classList.add('card-active');
    console.log('loader hidden and card shown');
  }
}
