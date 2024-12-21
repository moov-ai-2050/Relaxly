import { Observable } from '@nativescript/core';
import { authService } from '../../services/auth.service';
import { navigate } from '../../utils/navigation';

export class LoginViewModel extends Observable {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  async onLogin() {
    try {
      if (!this.email || !this.password) {
        this.set('errorMessage', 'Please enter both email and password');
        return;
      }

      await authService.login(this.email, this.password);
      navigate('pages/home/home-page');
    } catch (error) {
      this.set('errorMessage', error.message || 'Login failed');
    }
  }

  async onRegister() {
    navigate('pages/register/register-page');
  }
}