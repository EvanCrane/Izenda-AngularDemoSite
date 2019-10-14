import { Component, OnInit, ViewChild } from '@angular/core';
import { EducationDashview1Component } from '../../../../views/dashboards/education/education-dashview1/education-dashview1.component';
import { EducationDashview2Component } from '../../../../views/dashboards/education/education-dashview2/education-dashview2.component';

@Component({
  selector: 'app-education-dashboard',
  templateUrl: './education-dashboard.component.html',
  styleUrls: ['./education-dashboard.component.css']
})
export class EducationDashboardComponent implements OnInit {
  @ViewChild(EducationDashview1Component) dashview1;
  @ViewChild(EducationDashview2Component) dashview2;


  initComponent: Boolean;
  initRefreshView1Count: Boolean;
  initRefreshView2Count: Boolean;
  constructor() {
    this.initComponent = true;
    this.initRefreshView1Count = false;
    this.initRefreshView1Count = false;
  }

  ngOnInit() {
    this.determineInitView();
  }

  public determineInitView() {
    const component1 = document.getElementById('eduComponent1');
    const component2 = document.getElementById('eduComponent2');
    if (this.initComponent) {
      component2.classList.remove('active-component');
      component2.classList.add('inactive-component');
      component1.classList.remove('inactive-component');
      component1.classList.add('active-component');
      const x = document.getElementById('view2btn');
      x.classList.remove('active');
    } else {
      component2.classList.remove('inactive-component');
      component2.classList.add('active-component');
      component1.classList.remove('active-component');
      component1.classList.add('inactive-component');
      const x = document.getElementById('view1btn');
      x.classList.remove('active');
    }
    return this.initComponent;
  }

  public changeView($event) {
    const activeElement = document.getElementById($event.target.id);
    const component1 = document.getElementById('eduComponent1');
    const component2 = document.getElementById('eduComponent2');
    activeElement.classList.add('active');
    if ($event.target.id === 'view1btn') {
      component2.classList.remove('active-component');
      component2.classList.add('inactive-component');
      component1.classList.remove('inactive-component');
      component1.classList.add('active-component');
      const x = document.getElementById('view2btn');
      x.classList.remove('active');
      this.refreshReportParts('dashview1');
      this.initRefreshView1Count = true;
    } else {
      component1.classList.remove('active-component');
      component1.classList.add('inactive-component');
      component2.classList.remove('inactive-component');
      component2.classList.add('active-component');
      const x = document.getElementById('view1btn');
      x.classList.remove('active');
      this.refreshReportParts('dashview2');
      this.initRefreshView2Count = true;
    }
  }

  private refreshReportParts(viewName: string) {
    if (viewName === 'dashview1' && !this.initRefreshView1Count) {
      this.dashview1.updateDashboardReports();
    } else if (viewName === 'dashview2' && !this.initRefreshView2Count) {
      this.dashview2.updateDashboardReports();
    }
  }

}
