import { Component, NgZone, OnInit, ViewChild } from '@angular/core';

import { AuthService } from "../../shared/services/auth.service";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { HAddmemberComponent} from '../h-addmember/h-addmember.component';
import { HChatroomComponent} from '../h-chatroom/h-chatroom.component';
import { HDialogboxComponent} from '../h-dialogbox/h-dialogbox.component';
import { HPersonaldetailsComponent} from '../h-personaldetails/h-personaldetails.component';
import { HProgressComponent} from '../h-progress/h-progress.component';
import { HRemovememberComponent} from '../h-removemember/h-removemember.component';
import { HSpinfoComponent} from '../h-spinfo/h-spinfo.component';
import { HTabsComponent} from '../h-tabs/h-tabs.component';
import { HTimelineComponent} from '../h-timeline/h-timeline.component';
import { HTrackComponent} from '../h-track/h-track.component';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-h-dashboard',
  templateUrl: './h-dashboard.component.html',
  styleUrls: ['./h-dashboard.component.css']
})
export class HDashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'trial01';
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
   
    private observer: BreakpointObserver,
    public dialog: MatDialog,
    public pendingreq: MatDialog,
    private route:ActivatedRoute,
    
  ) { }

  info(): void {
    this.router.navigate(['/display_info']);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  OpenDialog() {
    this.dialog.open(HDialogboxComponent, { height: '100%', width: '100%' });
  }
 
  AddMember() {
    this.dialog.open(HAddmemberComponent, { height: '400px', width: '400px' });
  }
  RemoveMember() {
    this.dialog.open(HRemovememberComponent, { height: '400px', width: '400px' });
  }
  ServiceProviderinfo() {
    this.dialog.open( HSpinfoComponent, { height: '100%', width: '100%' });
  }
  
  showchat(){
    // alert("in  chat");
    // console.log('nkdsgfnsdgf');
    this.router.navigate(['h-chatroom'] , {relativeTo: this.route});
  }

  showtimeline(){
    // alert("in  timeline");
    this.router.navigate(['h-timeline'] , {relativeTo: this.route});
  }

  showprogress(){
    // alert("in  progress");
    this.router.navigate(['h-progress'] , {relativeTo: this.route});
  }
}
