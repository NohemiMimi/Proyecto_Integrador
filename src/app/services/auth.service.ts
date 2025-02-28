<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly validUser = { email: 'admin@admin.com', password: '123456' };

  async login(email: string, password: string): Promise<boolean> {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('user', JSON.stringify(this.validUser)); // Simula sesión
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
=======
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly validUser = { email: 'admin@admin.com', password: '123456' };

  async login(email: string, password: string): Promise<boolean> {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('user', JSON.stringify(this.validUser)); // Simula sesión
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
>>>>>>> f68db5b5a67a83e86346c2a24bba0cc9ed8f5fe2
