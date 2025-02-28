import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [{ path: '', component: LoginPage }];

export const LoginPageRoutingModule = RouterModule.forChild(routes);
