import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  signInWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        const credential = result.credential as firebase.auth.OAuthCredential;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  signInWithEmailPassword() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // Redirect to the home page
        this.router.navigate(['/home']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  }

}


