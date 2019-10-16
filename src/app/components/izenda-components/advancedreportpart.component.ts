import { Component, AfterViewInit } from '@angular/core';
import { IzendaIntegrate } from '../../helpers/izenda.integrate';


@Component({
    templateUrl: 'advancedreportpart.component.html',
    styleUrls: ['advancedreportpart.component.css']
})

// tslint:disable-next-line: component-class-suffix
export class AdvancedReportPart implements AfterViewInit {
    selectedPart: number;

    constructor(private izItergrate: IzendaIntegrate) {
    }

    ngAfterViewInit() {
        this.updateResultReportPart('');
        this.displayPart(1);
    }

    updateResultReportPart(p1filter: string) {
        const overridingFilterValue = {
            p1value: p1filter,
        };
        const reportPartId = '[your_report_part_id]';
        this.izItergrate.UpdateResultReportPart(reportPartId, overridingFilterValue, 'update-result');
        this.izItergrate.HideIzenaProgressBar('update-result', 'reportPartLoader');
    }

    displayPart(partNumber: number) {
        this.selectedPart = partNumber;
        let reportPartId = '[your_report_part_id]';
        switch (partNumber) {
            case 1: {
                reportPartId = '[your_1st_report_part_id]';
                break;
            }
            case 2: {
                reportPartId = '[your_2nd_report_part_id]';
                break;
            }
            case 3: {
                reportPartId = '[your_3rd_report_part_id]';
                break;
            }
        }

        this.izItergrate.RenderSingleReportPart(reportPartId, 'update-alone');
        this.izItergrate.HideIzenaProgressBar('update-alone', 'reportPartLoader');
    }
}
