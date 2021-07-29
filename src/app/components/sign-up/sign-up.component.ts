import { AuthSPService } from 'src/app/shared/authSP/auth-sp.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  // authentService!: any;
  // userRole!: any

  constructor(
    public authService: AuthService,
    public authSPService: AuthSPService
    // public fb: FormBuilder,
    // private bookApi: BookService,
    // public router: Router,
    // public ngZone: NgZone
  ) { }

  ngOnInit(): void {
    // if(this.userRole = 10) {
    //   this.authentService = this.authService
    // }
    // else {
    //   this.authentService = this.authSPService
    // }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must Enter Your E-mail.';
    }

    return this.email.hasError('email') ? 'Not a valid E-mail' : '';
  }
}
