import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TrackComponent } from '../track/track.component';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  // progress=[
  //   {"id":1, "name":"Architect"},
  //   {"id":2, "name":"Mason"},
  //   {"id":3,  "name":"Painter"}

  // ]
  constructor(public _activatedRoute: ActivatedRoute, public router: Router, public track: MatDialog) { }
  onButtonClick(): void {
    this.router.navigate(['/track']);
  }

  ngOnInit(): void {
  }
  OpenTrack() {
    this.track.open(TrackComponent, { height: '400px', width: '400px' });

  }

}