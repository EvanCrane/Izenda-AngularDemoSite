import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {IzendaIntegrate} from '../helpers/izendaintegrate';

@Component({
    selector: 'app-izendahome',
    templateUrl: 'rootcontainer.html'
})

// tslint:disable-next-line:component-class-suffix
export class IzendaHome implements AfterViewInit, OnDestroy {
    dom: any = {};

    constructor(private izItergrate: IzendaIntegrate) {}

    ngAfterViewInit() {
        this.dom = this.izItergrate.RenderIzenda();
    }

    ngOnDestroy() {
        this.izItergrate.DestroyDom(this.dom);
    }
}
