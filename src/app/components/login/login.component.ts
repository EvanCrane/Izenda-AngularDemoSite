import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFromModalPassword = new FormControl('', Validators.required);
  materialLoginFormUsername = new FormControl('', Validators.required);
  materialLoginFormPassword = new FormControl('', Validators.required);
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService

  ) { }

  ngOnInit() {
    // reset login status
    if (this.authenticationService.hasToken()) {
      this.authenticationService.logout();
    }
  }

  login() {
    this.loading = true;
    console.log(this.model);
    this.authenticationService.login(this.model.tenantname, this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['home']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
