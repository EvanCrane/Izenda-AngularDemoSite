import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  currentUser: Observable<string>;
  isAuthenticated: Observable<boolean>;
  clicked: boolean;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.currentUser = authService.currentUser();
    this.isAuthenticated = authService.isAuthenticated();
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
