import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { ExportReportComponent, ExportReportViewerComponent, ExportDashboardViewerComponent } from './components/izenda-components/export/index';

import { LandingComponent } from './components/landing/landing.component';

import { Dashboard1Component  as HealthcareDashboard1 } from './views/dashboards/healthcare/dashboard1/dashboard1.component';
import { Dashboard2Component as HealthcareDashboard2 } from './views/dashboards/healthcare/dashboard2/dashboard2.component';
import { Dashboard3Component  as HealthcareDashboard3 } from './views/dashboards/healthcare/dashboard3/dashboard3.component';
import { EducationDashboardComponent } from './pages/dashboards/education/education-dashboard/education-dashboard.component';
import { ReportCardComponent } from './pages/dashboards/education/report-card/report-card.component';
import { GovernmentDashboardComponent } from './pages/dashboards/government/government-dashboard/government-dashboard.component';
import { GovernmentFormComponent } from './pages/dashboards/government/government-form/government-form.component';



import { NotFoundComponent } from './components/notfound/notfound.component';
import { IzendaComponent } from './components/izenda/izenda.component';


import {
  IzendaHome,
  IzendaSetting,
  ReportDesigner,
  ReportList,
  ReportViewer,
  ReportCustomFilter,
  ReportPart,
  AdvancedReportPart,
  DashboardDesigner,
  Dashboard,
  DashboardViewer
} from './izenda-components/index';
import { PathLocationStrategy } from '@angular/common';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'izenda', component: IzendaComponent, canActivate: [AuthGuard] },
  { path: 'izenda/home', component: IzendaHome, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: 'izenda/settings', component: IzendaSetting, canActivate: [AuthGuard] },
  { path: 'izenda/reportdesigner', component: ReportDesigner, canActivate: [AuthGuard] },
  { path: 'izenda/report', component: ReportList, canActivate: [AuthGuard] },
  { path: 'izenda/reportviewer', component: ReportViewer, canActivate: [AuthGuard] },
  { path: 'izenda/reportcustomfilter', component: ReportCustomFilter, canActivate: [AuthGuard] },
  { path: 'izenda/reportpart', component: ReportPart, canActivate: [AuthGuard] },
  { path: 'izenda/advancedreportpart', component: AdvancedReportPart },
  { path: 'izenda/dashboarddesigner', component: DashboardDesigner, canActivate: [AuthGuard] },
  { path: 'izenda/dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'izenda/dashboardviewer', component: DashboardViewer, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboards/healthcare/dashboard1', component: HealthcareDashboard1, canActivate: [AuthGuard] },
  { path: 'dashboards/healthcare/dashboard2', component: HealthcareDashboard2, canActivate: [AuthGuard] },
  { path: 'dashboards/healthcare/dashboard3', component: HealthcareDashboard3, canActivate: [AuthGuard] },
  { path: 'dashboards/education/dashboard', component: EducationDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboards/education/report-card', component: ReportCardComponent, canActivate: [AuthGuard] },
  { path: 'dashboards/government/dashboard', component: GovernmentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboards/government/form-example', component: GovernmentFormComponent, canActivate: [AuthGuard] },
  // export route
  { path: 'viewer/reportpart/:id', component: ExportReportComponent },
  { path: 'report/view/:id', component: ExportReportViewerComponent },
  { path: 'dashboard/edit/:id', component: ExportDashboardViewerComponent },
  // otherwise redirect to landing
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
