import { Component, AfterViewInit } from '@angular/core';
import {IzendaIntegrate} from '../../helpers/izenda.integrate';


@Component({
    selector: 'app-report-part',
    templateUrl: 'reportpart.component.html'
})

export class ReportPart implements AfterViewInit {

    constructor(private izItergrate: IzendaIntegrate) {
     }

    ngAfterViewInit() {
        this.izItergrate.RenderReportParts();
    }
}
