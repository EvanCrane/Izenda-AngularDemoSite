import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import {
  Dashboard,
  DashboardDesigner,
  IzendaHome,
  IzendaSetting,
  ReportCustomFilter,
  ReportDesigner,
  ReportList,
  ReportPart,
  AdvancedReportPart,
  ReportViewer,
  DashboardViewer
} from './components/izenda-components/index';
import {
  ExportReportComponent,
  ExportReportViewerComponent,
  ExportDashboardViewerComponent
} from './components/izenda-components/export/index';

import { IzendaIntegrate } from './helpers/izenda.integrate';
import { IzendaReportParts } from './helpers/izenda.reportparts';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Dashboard,
    DashboardDesigner,
    IzendaHome,
    IzendaSetting,
    ReportCustomFilter,
    ReportDesigner,
    ReportList,
    ReportPart,
    AdvancedReportPart,
    ReportViewer,
    DashboardViewer,
    ExportReportComponent,
    ExportReportViewerComponent,
    ExportDashboardViewerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IzendaIntegrate,
    IzendaReportParts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
