import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: LoginRequest = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  submit(): void {
    this.authService.login(this.form);
  }
}
