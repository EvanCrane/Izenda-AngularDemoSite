import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// MDB Angular Pro
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { DomService } from './services/dom.service';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

import { SharedModule } from './shared/shared.module';
import { ModelsComponent } from './shared/models/models.component';
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
import { InsuranceDashboard1Component } from './components/insurance/insurance-dashboard1/insurance-dashboard1.component';
import { NavCardComponent } from './components/home/nav-card/nav-card.component';
import { StatsCardComponent } from './components/healthcare/stats-card/stats-card.component';
import { StatsCard2Component } from './components/healthcare/stats-card2/stats-card2.component';
import { StatsCard3Component } from './components/healthcare/stats-card3/stats-card3.component';
import { StatsCard4Component } from './components/healthcare/stats-card4/stats-card4.component';
import { IzNavComponent } from './components/iz-nav/iz-nav.component';



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
    EduDashview2Component,
    InsuranceDashboard1Component,
    NavCardComponent,
    StatsCardComponent,
    StatsCard2Component,
    StatsCard3Component,
    StatsCard4Component,
    ModelsComponent,
    IzNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    MDBSpinningPreloader,
    AuthGuard,
    AuthenticationService,
    UserService,
    DomService,
    CanDeactivateGuard,
    IzendaIntegrate,
    IzendaReportParts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
