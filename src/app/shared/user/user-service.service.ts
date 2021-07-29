import { Injectable, NgZone } from '@angular/core';
import { UserService } from './user-service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; // AngularFireDatabase, AngularFireList, AngularFireObject,
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // usersRef!: AngularFireList<any>;
  // userRef!: AngularFireObject<any>;
  userData: any; // Save logged in user data
  currentUser: any;

  // constructor(private db: AngularFirestore) { }

  //  this.db.collection('users').doc('some_uid').valueChanges().subscribe((response) => {
  //   this.currentUser = response;
  // });

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
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
      } else {
        localStorage.setItem('user', null!); //null value
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  } // private db: AngularFireDatabase

  /* Create user */
  async AddUser(userServ: UserService) {
    try {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Owner/${userServ.uid}`);
      const userData: UserService = {
        uid: userServ.uid,
        first_name: userServ.first_name,
        last_name: userServ.last_name,
        contact_no: userServ.contact_no,
        project_name: userServ.project_name,
      }
      return userRef.set(userData, {
        merge: true
      });
    } catch (error) {
      this.errorMgmt(error);
    }
  }

  /* Get book-user */
  // GetUser(userServ: UserService) {
    // this.userData = this.afs.doc(`users/${userServ.uid}`);
    // return this.userData;

  //   this.afs.collection('users').doc(userServ.uid).valueChanges().subscribe((response) => {
  //     this.currentUser = response;
  //     console.log(response)
  //   });
  // }

  //  this.db.collection('users').doc('some_uid').valueChanges().subscribe((response) => {
  //   this.currentUser = response;
  // });

  /* Get book list---user-list */
  GetUsers() {
    this.userData = this.afs.collection('Owner');
    return this.userData;
  }

  /* Update book-user */
  // UpdateUser(uid: string, userServ: UserService) {
  //   this.userData.update({
  //     first_name: userServ.first_name,
  //     last_name: userServ.last_name,
  //     contact_no: userServ.contact_no,
  //     project_name: userServ.project_name,
  //   })
  //     .catch(error => {
  //       this.errorMgmt(error);
  //     })
  // }

  // Send email verfificaiton when new user sign up
  // SendVerificationMail() {
  //   return this.ngFireAuth.currentUser.then(u => u!.sendEmailVerification())
  //     .then(() => {
  //       // this.router.navigate(['as-owner']);
  //       this.router.navigate(['verify-email-address']);
  //     })
  // }

  /* Delete book-user */
  DeleteUser(id: string) {
    this.userData = this.afs.doc('Owner/' + id);
    this.userData.remove()
      .catch((error: any) => {
        this.errorMgmt(error);
      })
  }

  // Error management
  private errorMgmt(error: any) {
    console.log(error)
  }
}

