import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { STrackComponent} from '../s-track/s-track.component';


@Component({
  selector: 'app-s-progress',
  templateUrl: './s-progress.component.html',
  styleUrls: ['./s-progress.component.css']
})
export class SProgressComponent implements OnInit {

  constructor(public _activatedRoute: ActivatedRoute, public router: Router, public track: MatDialog) { }
  onButtonClick(): void {
    this.router.navigate(['/h-track']);
  }

  
  OpenSTrack() {
    this.track.open(STrackComponent, { height: '400px', width: '400px' });

  }


  ngOnInit(): void {
  }

}
