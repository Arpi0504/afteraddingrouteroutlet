import { Component, NgZone, OnInit, ViewChild } from '@angular/core';

import { AuthService } from "../../shared/services/auth.service";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-s-dashboard',
  templateUrl: './s-dashboard.component.html',
  styleUrls: ['./s-dashboard.component.css']
})
export class SDashboardComponent implements OnInit {
 
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'trial01';
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
   
    private observer: BreakpointObserver,
    public dialog: MatDialog,
  
    private route:Router
  ) { }

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
}
