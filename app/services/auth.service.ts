import { Observable } from '@nativescript/core';
import { firebase } from '@nativescript/firebase';

class AuthService extends Observable {
  private static instance: AuthService;
  private _user: any = null;

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  get user() {
    return this._user;
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email,
          password
        }
      });
      this._user = result;
      this.notifyPropertyChange('user', this._user);
      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const result = await firebase.createUser({
        email,
        password
      });
      return result;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await firebase.logout();
      this._user = null;
      this.notifyPropertyChange('user', this._user);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
}

export const authService = AuthService.getInstance();