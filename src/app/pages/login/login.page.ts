import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const loggedIn = await this.authService.login(email, password);

      if (loggedIn) {
        window.location.href = '/home'; // 🔥 Redirección manual en standalone
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Credenciales incorrectas',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    }
  }
}
