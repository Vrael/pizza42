import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p> 2022 © Product42. Design by Devs for Devs</p>
    <mat-grid-list cols="3" rowHeight="2:1">
      <mat-grid-tile>
        <a href="javascript:void(0);">About Us</a>
      </mat-grid-tile>
      <mat-grid-tile>
        <a href="javascript:void(0);">Help</a>
      </mat-grid-tile>
      <mat-grid-tile>
        <a href="javascript:void(0);">Contact Us</a>
      </mat-grid-tile>
    </mat-grid-list>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
