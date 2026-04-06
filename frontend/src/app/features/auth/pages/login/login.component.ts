import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';
import { SignUpRequest } from '../../models/sign-up-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly keralaCities = [
    'Kochi',
    'Thiruvananthapuram',
    'Kozhikode',
    'Thrissur',
    'Kollam',
    'Alappuzha',
    'Kottayam',
    'Kannur',
    'Palakkad',
    'Malappuram'
  ];

  mode: 'login' | 'signup' = 'login';
  statusMessage = '';
  errorMessage = '';
  loading = false;

  form: LoginRequest = {
    mobile: '',
    password: ''
  };

  signUpForm: SignUpRequest = {
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    role: 'user',
    city: 'Kochi',
    accountType: 'individual',
    businessName: '',
    category: 'plumber',
    address: '',
    experienceYears: 1,
    communityName: '',
    locality: ''
  };

  constructor(private authService: AuthService) {}

  submit(): void {
    this.errorMessage = '';
    this.statusMessage = '';

    if (!this.form.mobile.trim() || !this.form.password.trim()) {
      this.errorMessage = 'Enter your mobile number and password.';
      return;
    }

    this.loading = true;
    this.authService.login(this.form).subscribe({
      next: (response) => {
        this.loading = false;
        this.statusMessage = response.message;
      },
      error: (error: Error) => {
        this.loading = false;
        this.errorMessage = error.message || 'Unable to login';
      }
    });
  }

  signUp(): void {
    this.errorMessage = '';
    this.statusMessage = '';

    if (!this.signUpForm.fullName.trim() || !this.signUpForm.mobile.trim() || !this.signUpForm.password.trim()) {
      this.errorMessage = 'Name, mobile number, and password are required.';
      return;
    }

    if (this.signUpForm.role === 'provider' && !this.signUpForm.businessName?.trim()) {
      this.errorMessage = 'Business name is required for provider signup.';
      return;
    }

    this.loading = true;
    this.authService.signUp(this.signUpForm).subscribe({
      next: (response) => {
        this.loading = false;
        this.statusMessage = response.message;
      },
      error: (error: Error) => {
        this.loading = false;
        this.errorMessage = error.message || 'Unable to create account';
      }
    });
  }

  setMode(mode: 'login' | 'signup'): void {
    this.mode = mode;
    this.errorMessage = '';
    this.statusMessage = '';
  }

  continueAsGuest(): void {
    this.errorMessage = '';
    this.statusMessage = '';
    this.authService.continueAsGuest();
  }

  get showCommunityFields(): boolean {
    return this.signUpForm.role === 'user' && this.signUpForm.accountType === 'community';
  }

  get showProviderFields(): boolean {
    return this.signUpForm.role === 'provider';
  }
}
