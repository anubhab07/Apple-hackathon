import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  orderId = 'ORD0001';
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  orders = [
    {value: 'ORD0001', viewValue: 'ORD0001'},
    {value: 'ORD0002', viewValue: 'ORD0002'},
    {value: 'ORD0003', viewValue: 'ORD0003'},
    {value: 'ORD0004', viewValue: 'ORD0004'},
    {value: 'ORD0005', viewValue: 'ORD0005'}
  ];
  constructor(private breakpointObserver: BreakpointObserver, private bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {orderId: this.orderId}
    });
  }
}

@Component({
  selector: 'app-bottom-sheet-overview',
  template: `<mat-chip-list>
              <p>OrderId: <mat-chip color="primary" selected="true">{{data.orderId}}</mat-chip></p>
              </mat-chip-list>
              <mat-chip-list>
              <p>Product: <mat-chip color="primary" selected="true">iPhone X Red 128gb</mat-chip></p>
            </mat-chip-list>`,
})
export class BottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<AppComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
