import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
// import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  currentUser: Observable<string>;
  isAuthenticated: Observable<boolean>;
  tokenStatus: any;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.currentUser = authService.currentUser();
    this.isAuthenticated = authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    // this.canActivate();
    const mainDiv = document.getElementById('router-div');
    mainDiv.classList.add('bg-home');
  }

  // Commenting this out until there is a way to wait for token authentication observable to complete. 
  /*
  async canActivate() {
    if (this.authService.hasToken()) {
      this.router.navigate(['dashboards/government/dashboard']);
    }
  }

  async confirmAuthentication() {
    const response = await this.isAuthenticated.toPromise();
    return response;
  }

  canDeactivate(): Observable<boolean> | boolean {
    console.log('i am navigating away');
    return true;
  }
  */
}
