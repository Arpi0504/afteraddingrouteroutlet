import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-s-track',
  templateUrl: './s-track.component.html',
  styleUrls: ['./s-track.component.css']
})
export class STrackComponent implements OnInit {

  toppings: FormGroup;

  constructor(fb: FormBuilder) 
  {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
  }
    ngOnInit(): void {
    }
}  


