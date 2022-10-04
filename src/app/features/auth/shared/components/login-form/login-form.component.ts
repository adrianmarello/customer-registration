import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from 'src/app/core/services/login.service';


@Component({
  selector: 'cmreg-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginFormInitialization();
  }

  loginFormInitialization(): void {
    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.login();
    }
  }

  login() {
    this.loginService.login(this.loginForm.value).then(
      response => {
        this.loginForm.reset();
        this.router.navigate(['/home']);
      }
    ).catch(
      error => {
        this.toastr.error('Su usuario o contraseña son incorrectos');
      }
    )
  }
}
