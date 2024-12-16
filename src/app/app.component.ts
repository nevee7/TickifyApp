import { Component } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // No need to import CommonModule if standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TickifyApp';

  constructor(private auth: Auth) {}

  login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('User signed in:', result.user);
        // Handle successful sign-in (e.g., redirect to another page)
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  }
}
