import { Component, AfterViewInit } from '@angular/core';

import { User } from '../shared/models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import IzendaSynergy from '../../assets/izenda/izenda_ui';
let IzendaSynergy = require("../../assets/izenda/izenda_ui");

@Component({
    templateUrl: 'export.dashboardviewer.html'
})

export class ExportDashboardViewerComponent implements AfterViewInit {
    currentUserContext: any = {};
   repportId: string;
    constructor( private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngAfterViewInit() {
        console.log(this.activatedRoute);
        this.activatedRoute.params.subscribe((params: Params) => {
            this.repportId = params['id'];
        });

        this.activatedRoute.queryParams.subscribe((params: Params) => {
            const token = params['token'];
            this.currentUserContext = { token: token};
        });

        console.log(this.repportId);
        console.log(this.currentUserContext);
        IzendaSynergy.setCurrentUserContext(this.currentUserContext);
        IzendaSynergy.renderReportViewerPage(document.getElementById('izenda-export-dashboardviewer'), {
                'id': this.repportId,
                'useQueryParam': true,
            });
    }
}
