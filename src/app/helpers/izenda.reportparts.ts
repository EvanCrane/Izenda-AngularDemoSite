import { Injectable } from '@angular/core';
import { IzendaIntegrate } from './izenda.integrate';

@Injectable()
export class IzendaReportParts {
    constructor(private izIntegrate: IzendaIntegrate) { }

    public async renderReportPartAsync(reportPartId: string, containerId: string) {
        this.izIntegrate.RenderSingleReportPart(reportPartId, containerId);
        console.log('Report Part: ' + containerId + ' render starting');
        // this.izIntegrate.HideIzenaProgressBar('update-alone', 'reportPartLoader');
    }

    public async updateReportPartsAsync(reportPartId: string, containerId: string) {
        this.izIntegrate.UpdateResultReportPart(reportPartId, null, containerId);
        console.log('Report Part: ' + containerId + ' report part updating');
    }
}
