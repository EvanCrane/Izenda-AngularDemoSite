import { Component, AfterViewInit } from '@angular/core';
import {IzendaIntegrate} from '../helpers/izendaintegrate';


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
