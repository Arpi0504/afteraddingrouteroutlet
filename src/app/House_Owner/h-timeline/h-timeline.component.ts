import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { HPersonaldetailsComponent} from '../h-personaldetails/h-personaldetails.component';
@Component({
  selector: 'app-h-timeline',
  templateUrl: './h-timeline.component.html',
  styleUrls: ['./h-timeline.component.css']
})
export class HTimelineComponent implements OnInit {

  constructor(public _activatedRoute:ActivatedRoute,public  router:Router,public dialog : MatDialog) {  }
  
  ngOnInit(): void {
  }
  createaccount()  {
    this.dialog.open( HPersonaldetailsComponent,{height:'100%',width:'800px'});
    }

}
