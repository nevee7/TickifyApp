import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide.
})
export class AuthService {
  user: User | null = null;

  constructor(private auth: Auth) {
    // Subscribe to authentication state changes.
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  // Google login method
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  // Logout method
  logout() {
    return signOut(this.auth);
  }

  // Get the currently logged-in user
  getUser() {
    return this.user;
  }
}
