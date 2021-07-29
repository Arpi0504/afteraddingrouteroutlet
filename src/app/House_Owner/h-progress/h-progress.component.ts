import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HTrackComponent} from '../h-track/h-track.component';

@Component({
  selector: 'app-h-progress',
  templateUrl: './h-progress.component.html',
  styleUrls: ['./h-progress.component.css']
})
export class HProgressComponent implements OnInit {

  constructor(public _activatedRoute: ActivatedRoute, public router: Router, public track: MatDialog) { }
  onButtonClick(): void {
    this.router.navigate(['/track']);
  }

  ngOnInit(): void {
  }
  OpenTrack() {
    this.track.open(HTrackComponent, { height: '400px', width: '400px' });

  }

}


