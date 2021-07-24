import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userState: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(this.userState);
      } else {
        localStorage.removeItem('user');
        JSON.parse(this.userState);
      }
    });
  }

  signIn(email: string, password: string): Promise<void> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.setUserData(result.user as User);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string): Promise<void> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.setUserData(result.user as User);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationMail(): Promise<void> {
    return this.afAuth.currentUser
      .then((u) => {
        if (u) {
          u.sendEmailVerification();
        }
      })
      .then(() => {
        this.router.navigate(['email-verification']);
      });
  }

  forgotPassword(passwordResetEmail: string): Promise<void> {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(this.userState);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  googleAuth(): Promise<void> {
    return this.authLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  authLogin(provider: firebase.default.auth.AuthProvider): Promise<void> {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.setUserData(result.user as User);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  setUserData(user: User): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userState, {
      merge: true,
    });
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
