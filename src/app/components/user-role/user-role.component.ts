import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../../shared/user/user-service.service';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  // UserRole!: string;

  constructor(
    public authService: AuthService,
    public userServ: UserServiceService,
    public router: Router,
  ) { }

  // TakeUserRole() {
  //   this.UserRole = "Role Assigned !"
  //   return this.UserRole;
  // }

  // onKey(event) { const inputValue = event.target.value; }

  ngOnInit(): void {
  }

}
