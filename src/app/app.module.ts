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
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { IzendaComponent } from './components/izenda/izenda.component';
import { LandingComponent } from './components/landing/landing.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { GovernmentComponent } from './components/government/government.component';
import { EducationComponent } from './components/education/education.component';
import { EduDashboard1Component } from './components/education/edu-dashboard1/edu-dashboard1.component';
import { GovDashboard1Component } from './components/government/gov-dashboard1/gov-dashboard1.component';
import { HealthDashboard1Component } from './components/healthcare/health-dashboard1/health-dashboard1.component';
import { GovDashview1Component } from './components/government/gov-dashview1/gov-dashview1.component';
import { GovDashview2Component } from './components/government/gov-dashview2/gov-dashview2.component';
import { GovDashview3Component } from './components/government/gov-dashview3/gov-dashview3.component';
import { EduDashview1Component } from './components/education/edu-dashview1/edu-dashview1.component';
import { EduDashview2Component } from './components/education/edu-dashview2/edu-dashview2.component';


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
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    IzendaComponent,
    LandingComponent,
    HealthcareComponent,
    GovernmentComponent,
    EducationComponent,
    EduDashboard1Component,
    GovDashboard1Component,
    HealthDashboard1Component,
    GovDashview1Component,
    GovDashview2Component,
    GovDashview3Component,
    EduDashview1Component,
    EduDashview2Component
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
