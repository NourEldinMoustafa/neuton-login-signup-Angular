import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  displayName: string = '';
  email: string = '';
  password: string = '';
  constructor(private afAuth: AngularFireAuth) {}

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
  signUpWithEmailPassword() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  }
}
