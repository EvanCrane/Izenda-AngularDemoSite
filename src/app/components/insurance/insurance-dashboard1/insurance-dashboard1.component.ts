import { Component, AfterViewInit } from '@angular/core';
import { IzendaReportParts } from '../../../helpers/izenda.reportparts';

@Component({
  selector: 'app-insurance-dashboard1',
  templateUrl: './insurance-dashboard1.component.html',
  styleUrls: ['./insurance-dashboard1.component.css']
})
export class InsuranceDashboard1Component implements AfterViewInit {

  constructor(private izReportParts: IzendaReportParts) { }

  ngAfterViewInit() {
    this.izReportParts.renderReportPartAsync('E0C3EDCD-0FE7-4256-9D58-F19B856966F5', 'iChart-issuesovertime-line1');
    this.izReportParts.renderReportPartAsync('3642449E-E0FA-40C2-B623-CDFC610BFA05', 'iChart-planfinder-ring1');
    this.izReportParts.renderReportPartAsync('287C0DF3-9AA6-4FAC-836B-58239F37B110', 'iGrid-medicaretable-grid1');
    this.izReportParts.renderReportPartAsync('CB7DD652-797C-49F7-9CB6-D885685925AE', 'iChart-uninsured-scatter1');
  }

}
