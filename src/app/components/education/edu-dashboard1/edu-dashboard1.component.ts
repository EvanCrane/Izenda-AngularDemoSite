import { Component, OnInit, ViewChild } from '@angular/core';
import { EduDashview1Component } from '../edu-dashview1/edu-dashview1.component';
import { EduDashview2Component } from '../edu-dashview2/edu-dashview2.component';

@Component({
  selector: 'app-edu-dashboard1',
  templateUrl: './edu-dashboard1.component.html',
  styleUrls: ['./edu-dashboard1.component.css']
})
export class EduDashboard1Component implements OnInit {
  @ViewChild(EduDashview1Component, { static: false }) dashview1;
  @ViewChild(EduDashview2Component, { static: false }) dashview2;


  initComponent: boolean;
  initRefreshView1Count: boolean;
  initRefreshView2Count: boolean;
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
