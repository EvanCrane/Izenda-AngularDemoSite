import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import IzendaSynergy from '../../assets/izenda/izenda_ui';
const IzendaSynergy = require('../../../../assets/izenda/izenda_ui');

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html'
})
export class ExportReportComponent implements AfterViewInit {

  currentUserContext: any = {};
  reportPartId: string;
  constructor( private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngAfterViewInit() {
      console.log(this.activatedRoute);
      this.activatedRoute.params.subscribe((params: Params) => {
          this.reportPartId = params.id;
      });

      this.activatedRoute.queryParams.subscribe((params: Params) => {
          const token = params.token;
          this.currentUserContext = { token};
      });

      console.log(this.reportPartId);
      console.log(this.currentUserContext);
      IzendaSynergy.setCurrentUserContext(this.currentUserContext);
      IzendaSynergy.renderReportPart(document.getElementById('izenda-export-reportpart'), {
              id: this.reportPartId,
              useQueryParam: true,
          });
  }
}
