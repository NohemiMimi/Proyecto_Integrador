<<<<<<< HEAD
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) 
  },
  { path: '**', redirectTo: 'login' } 
];
=======
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) 
  },
  { path: '**', redirectTo: 'login' } 
];
>>>>>>> f68db5b5a67a83e86346c2a24bba0cc9ed8f5fe2
