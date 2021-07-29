import { User } from "../../shared/services/user";
import { User02 } from "../../shared/services/user02";
import { Component, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  Users!: User02[];

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.authService.GetUsers().subscribe((res: { map: (arg0: (e: any) => User) => User02[]; }) => {
      this.Users = res.map((e: { payload: { doc: { id: any; data: () => User; }; }; }) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      })
    });
  }  

  /* Delete */
  removeUser = (user: { uid: string | undefined; }) => this.authService.deleteUser(user);

}
