import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-removemember',
  templateUrl: './h-removemember.component.html',
  styleUrls: ['./h-removemember.component.css']
})
export class HRemovememberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  favoriteSeason: string | undefined;
  seasons: string[] = ['Architect', 'Mason', 'Painter'];
}
