import { Injectable, NgZone } from '@angular/core';
import { ServiceProvider } from './service-provider';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; // AngularFireDatabase, AngularFireList, AngularFireObject,
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  userData: any; // Save logged in user data
  currentUser: any;

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
  async AddUser(userServ: ServiceProvider) {
    try {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`ServProv/${userServ.uid}`);
      const userData: ServiceProvider = {
        uid: userServ.uid,
        first_name: userServ.first_name,
        last_name: userServ.last_name,
        contact_no: userServ.contact_no,
        occupation: userServ.occupation,
        designation: userServ.designation,
        experiance: userServ.experiance,
        company_name: userServ.company_name,
        comp_address: userServ.comp_address,
        web_url: userServ.web_url,
      }
      return userRef.set(userData, {
        merge: true
      });
    } catch (error) {
      this.errorMgmt(error);
    }
  }

  /* Get book list---user-list */
  GetUsers() {
    this.userData = this.afs.collection('users');
    return this.userData;
  }

  /* Delete book-user */
  DeleteUser(id: string) {
    this.userData = this.afs.doc('users/' + id);
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
