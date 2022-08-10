import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-grid-list cols="3" rowHeight="2:1">
      <mat-grid-tile>
        <mat-list role="list">
          <mat-list-item role="listitem"><h3>Pizza42</h3></mat-list-item>
          <mat-list-item role="listitem">
            <ul>
              <li><a href="javascript:void(0);">About us</a></li>
              <li><a href="javascript:void(0);">Franchise Opportunities</a></li>
              <li><a href="javascript:void(0);">Careers</a></li>
            </ul>
          </mat-list-item>
        </mat-list> 
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-list role="list">
          <mat-list-item role="listitem"><h3>Products</h3></mat-list-item>
          <mat-list-item role="listitem">
            <ul>
              <li><a href="javascript:void(0);">About us</a></li>
              <li><a href="javascript:void(0);">Franchise Opportunities</a></li>
              <li><a href="javascript:void(0);">Careers</a></li>
            </ul>
          </mat-list-item>
        </mat-list> 
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-list role="list">
          <mat-list-item role="listitem"><h3>Legal</h3></mat-list-item>
          <mat-list-item role="listitem">
            <ul>
              <li><a href="javascript:void(0);">Terms</a></li>
              <li><a href="javascript:void(0);">Policy</a></li>
              <li><a href="javascript:void(0);">Complaints</a></li>
            </ul>
          </mat-list-item>
        </mat-list> 
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [`
    mat-grid-list {
      background-color: #e0e0e0
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
