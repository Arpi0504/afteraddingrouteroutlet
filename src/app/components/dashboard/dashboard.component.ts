import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RemoveMemberComponent } from '../remove-member/remove-member.component';
import { ServiceproviderinfoComponent } from '../serviceproviderinfo/serviceproviderinfo.component';
import { AddMemberComponent } from '../add-member/add-member.component';
import { PendingrequestComponent } from '../pendingrequest/pendingrequest.component';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
// import { AddMemberComponent } from './components/add-member/add-member.component';
// import { ChatroomComponent } from './components/chatroom/chatroom.component';
// import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
// import { PendingrequestComponent } from './components/pendingrequest/pendingrequest.component';
// import { ProgressComponent } from './components/progress/progress.component';
// import { RemoveMemberComponent } from './components/remove-member/remove-member.component';
// import { ServiceproviderinfoComponent } from './components/serviceproviderinfo/serviceproviderinfo.component';
// import { TabComponent } from './components/tab/tab.component';
// import { TimelineComponent } from './components/timeline/timeline.component';
// import { TrackComponent } from './components/track/track.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'trial01';
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public _activatedRoute: ActivatedRoute,
    private observer: BreakpointObserver,
    public dialog: MatDialog,
    public pendingreq: MatDialog
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
    this.dialog.open(DialogboxComponent, { height: '100%', width: '100%' });
  }
  PendingRequest() {
    this.dialog.open(PendingrequestComponent, { height: '250px', width: '250px' });
  }
  AddMember() {
    this.dialog.open(AddMemberComponent, { height: '400px', width: '400px' });
  }
  RemoveMember() {
    this.dialog.open(RemoveMemberComponent, { height: '400px', width: '400px' });
  }
  ServiceProviderinfo() {
    this.dialog.open(ServiceproviderinfoComponent, { height: '100%', width: '100%' });
  }

}