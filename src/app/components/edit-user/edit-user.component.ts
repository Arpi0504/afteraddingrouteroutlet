import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;
  userRef: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      contact_no: [''],
      project_name: [''],
    })
  }


  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');

    this.authService.getUserDoc(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.fb.group({
        first_name: [this.userRef.first_name],
        last_name: [this.userRef.last_name],
        contact_no: [this.userRef.contact_no],
        project_name: [this.userRef.project_name]
      })
    })
  }

  onSubmit() {
    const id = this.actRoute.snapshot.paramMap.get('id');

    this.authService.updateUser(this.editForm.value, id);
    this.router.navigate(['users']);
  };

}
