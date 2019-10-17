import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-iz-nav',
  templateUrl: './iz-nav.component.html',
  styleUrls: ['./iz-nav.component.css']
})
export class IzNavComponent implements OnInit {

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
