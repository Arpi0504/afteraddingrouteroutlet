import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-leave-project',
  templateUrl: './leave-project.component.html',
  styleUrls: ['./leave-project.component.css']
})
export class LeaveProjectComponent implements OnInit {

  toppings: FormGroup;

  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
  }

  ngOnInit(): void {
  }

}
