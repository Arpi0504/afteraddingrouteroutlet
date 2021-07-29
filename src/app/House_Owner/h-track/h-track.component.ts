import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-h-track',
  templateUrl: './h-track.component.html',
  styleUrls: ['./h-track.component.css']
})
export class HTrackComponent implements OnInit {

  
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
