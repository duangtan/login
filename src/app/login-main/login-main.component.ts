import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrl: './login-main.component.css'
})
export class LoginMainComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      const token = this.username; // หรือข้อมูลอื่นที่คุณต้องการส่งกลับ

      // Send a message back to the opener window
      // window.opener.postMessage('success', 'http://localhost:4200');
      window.opener.postMessage(`success:${token}`, '*');

      // Optionally, redirect within the popup window
      // window.location.href = 'http://localhost:64643';
    } else {
      alert('Invalid credentials');
    }
  }
}
