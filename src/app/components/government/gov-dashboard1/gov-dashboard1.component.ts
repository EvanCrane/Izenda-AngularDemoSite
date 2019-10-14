import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-gov-dashboard1',
  templateUrl: './gov-dashboard1.component.html',
  styleUrls: ['./gov-dashboard1.component.css']
})
export class GovDashboard1Component implements OnInit {

  currentUser: Observable<string>;
  isAuthenticated: Observable<boolean>;
  loginStatus: any;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.currentUser = authService.currentUser();
    this.isAuthenticated = authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
