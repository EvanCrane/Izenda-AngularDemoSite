import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {IzendaIntegrate} from '../../helpers/izenda.integrate';


@Component({
    templateUrl: 'rootcontainer.html'
})

export class ReportList implements AfterViewInit, OnDestroy {
    dom: any = {};

    constructor(private izItergrate: IzendaIntegrate) {}

    ngAfterViewInit() {
        this.dom = this.izItergrate.RenderReportList();
        this.izItergrate.AutoHideIzenaProgressBar();
    }

    ngOnDestroy() {
        this.izItergrate.DestroyDom(this.dom);
    }
}
