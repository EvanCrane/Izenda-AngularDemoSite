import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const IzendaSynergy = require('../../assets/izenda/izenda_ui');

@Injectable()
export class IzendaIntegrate {

    constructor(private router: Router) {
    }

    DoIzendaConfig(): void {
        IzendaSynergy.config({
            'WebApiUrl': 'http://157.230.224.75:81/api/',
            'BaseUrl': '/',
            'RootPath': '/assets/izenda',
            'CssFile': 'izenda-ui.css',
            'Routes': {
                'ReportDesigner': 'reportdesigner',
                'Report': 'report',
                'ReportViewer': 'reportviewer',
                'ReportViewerPopup': 'reportviewerpopup',
                'Viewer': 'viewer',
                'Dashboard': 'dashboard',
                'New': 'new',
                'Settings': 'settings',
                'Account': 'account',
                'MyProfile': 'myprofile',
            },
            'Timeout': 3600,
            'NeedToEncodeUrl': false,
            'OnReceiveUnauthorizedResponse': this.redirectToLoginPage,
        });
    }

    redirectToLoginPage() {
        console.log('Current user is unauthorized to access Izenda function. Navigate to login page');
        this.router.navigate(['login']);
    }

    setContext(): void {
        const currentUserContext = {
            token: localStorage.getItem('izendatoken')
        };
        IzendaSynergy.setCurrentUserContext(currentUserContext);
    }

    /* Izenda Function */

    RenderIzenda() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.render(dom);
        return dom;
    }

    RenderIzendaSettings() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderSettingPage(dom);
        return dom;
    }

    RenderReportList() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderReportPage(dom);
        return dom;
    }

    RenderReportDesigner(): any {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderReportDesignerPage(dom);
        return dom;
    }

    RenderReportViewer() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderReportViewerPage(dom, '[your report id]');
        return dom;
    }

    RenderReportCustomizedFilterViewer() {
        this.setContext();
        const filtersObj: any = {
            'filters': [],
            'overridingFilterValue':
            {  // filter object to pass to api
                // override filter value at position 1 which is applying on current report, change >30 to >50
                p1value: 50,
                // tslint:disable-next-line:max-line-length
                // override filter value at position 2 which is applying on current report, change beetween (20:50) to (30:40)
                p2value: '30;#40'
            }
        };

        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderReportViewerPage(dom, '[your report id]', filtersObj);
        return dom;
    }

    RenderReportParts() {
        // debugger;
        this.setContext();
    }

    UpdateResultReportPart(reportPartId: string, overridingFilterValue: any, containerId: string) {
        this.setContext();
        IzendaSynergy.renderReportPart(document.getElementById(containerId), {
            'id': reportPartId,
            'overridingFilterValue': overridingFilterValue,
        });
    }

    RenderSingleReportPart(reportPartId: string, containerId: string) {
        this.setContext();
        IzendaSynergy.renderReportPart(document.getElementById(containerId), {
            'id': reportPartId
        });
    }

    RenderDashboard() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderDashboardPage(dom);
        return dom;
    }

    RenderDashboardDesigner() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderNewDashboardPage(dom);
        return dom;
    }

    RenderDashboardViewer() {
        this.setContext();
        const dom = document.getElementById('izenda-root');
        IzendaSynergy.renderDashboardViewerPage(dom, '[your dashboard id]');
        return dom;
    }

    DestroyDom(dom: any) {
        this.setContext();
        IzendaSynergy.unmountComponent(dom);
    }

    /* Izenda Helper Function */

    AutoHideIzenaProgressBar() {
        this.HideIzenaProgressBar('izenda-root', 'progressLoader');
    }

    HideIzenaProgressBar(targetId: string, progressBarId: string) {
        // select the target node
        const target = document.getElementById(targetId);

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                const progressBar = document.getElementById(progressBarId);
                if (progressBar) {
                    progressBar.style.display = 'none';
                }
            });
        });

        // configuration of the observer:
        const config = { attributes: true, childList: true, characterData: true };
        if (target) {
            // pass in the target node, as well as the observer options
            observer.observe(target, config);
        }
    }
}

