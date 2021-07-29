import { Injectable, NgZone } from '@angular/core';
import { User } from "./user";
import { User02 } from "./user02";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
// import { UserService } from '../user/user-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  // ngFireAuth: any;
  // UserRole: any; // Save Data as User Role
  UserRole!: string;
  path!: string;
  OwnerPath!: `Owner/${User["uid"]}`;
  serviceProvider!: `ServiceProvider/${User["uid"]}`;

  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public ngFireAuth: AngularFireAuth,
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      }
       else {
        localStorage.setItem('user', null!); //null value
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  // Sign in with email/password
  async SignIn(email: any, password: any) {
    try {
      const result: { user: any; } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  async SignUp(email: any, password: any) {
    try {
      const result: { user: any; } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      // console.log(user.uid)
      // this.AddUser(result.user);
      this.SendVerificationMail();
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then(u => u!.sendEmailVerification())
      .then(() => {
        // this.router.navigate(['as-owner']);
        this.router.navigate(['verify-email-address']);
      })
    }
    
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user: User) { // { uid: any; email: any; displayName: any; photoURL: any; emailVerified: any; }
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Owner/${user.uid}`); // `users/${user.uid}`
      const userData: User = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        // first_name: user.first_name,
        // last_name: user.last_name,
        // contact_no: user.contact_no,
        // project_name: user.project_name
        // displayName: user.displayName,
        // photoURL: user.photoURL,
      }
      return userRef.set(userData, {
        merge: true
      })
    }
    
    // Reset Forggot password
    async ForgotPassword(passwordResetEmail: any) {
      try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password Reset E-mail Sent, Check Your Inbox.');
    } catch (error) {
      window.alert(error);
    }
  }
  
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  
  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }
  
  // Add user details
  AddUser(user: User02) { // {uid: any, first_name: any, last_name: any, contact_no: nay, project_name: any },,, uid: any, first_name: any, last_name: any, contact_no: any, project_name: any
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Owner/${user.uid}`);
    const userData: User02 = {
      uid: user.uid,
      // email: user.email,
      // emailVerified: user.emailVerified,
      first_name: user.first_name,
      last_name: user.last_name,
      contact_no: user.contact_no,
      project_name: user.project_name
      // uid: user.uid,
      // email: user.email,
      // displayName: user.displayName,
      // photoURL: user.photoURL,
      // emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  /* Get User */
  getUserDoc(id: any) {
    return this.afs.collection('Owner').doc(id).valueChanges();

  }

  /* Delete User */
  deleteUser(user: any) {
    return this.afs
      .collection("Owner")
      .doc(user.uid)
      .delete();

  }

  /* Get User-list */
  GetUsers() {
    this.userData = this.afs.collection('Owner').snapshotChanges();
    return this.userData;

  }

  updateUser(user: User02, uid: any) {
    return this.afs
      .collection("Owner")
      .doc(uid)
      .update({
        first_name: user.first_name,
        last_name: user.last_name,
        contact_no: user.contact_no,
        project_name: user.project_name
      });
      
  }

  // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // Auth logic to run auth providers
  // async AuthLogin(provider: any) {
  //   try {
  //     const result: { user: any; } = await this.afAuth.signInWithPopup(provider);
  //     this.ngZone.run(() => {
  //       this.router.navigate(['dashboard']);
  //     });
  //     this.SetUserData(result.user);
  //   } catch (error) {
  //     window.alert(error);
  //   }
  // }

  // TakeUserRole() {
  //   return this.UserRole;
  // }

  TakeUserRole(value: any) {
    // console.log(value);
    if (value == 10) {
      // this.SetUserData()
      this.path = this.OwnerPath;
      this.router.navigate(['/owner-details']);
    }
    else {
      this.path = this.serviceProvider;
      this.router.navigate(['/servprov-details']);
    }
    // this.UserRole = value;
    // return this.UserRole;
  }


}