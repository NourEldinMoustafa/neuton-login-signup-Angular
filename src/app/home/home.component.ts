import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userEmail: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userEmail = user.email || '';
      } else {
        // No user is signed in.
      }
    });
  }
  signOut() {
    this.afAuth.signOut().then(() => {
      // Sign-out successful.
      this.router.navigate(['/login']);
    }).catch((error) => {
      // An error happened.
      console.error('Error signing out:', error);
    });
  }
}
