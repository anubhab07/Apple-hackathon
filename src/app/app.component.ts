import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  orders = [
    {value: 'ORD0001', viewValue: 'ORD0001'},
    {value: 'ORD0002', viewValue: 'ORD0002'},
    {value: 'ORD0003', viewValue: 'ORD0003'}
  ];
  constructor(private breakpointObserver: BreakpointObserver, private bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }
}

@Component({
  selector: 'app-bottom-sheet-overview',
  template: `<mat-chip-list>
              <p>OrderId: <mat-chip color="primary" selected="true">ORD0001</mat-chip></p>
              </mat-chip-list>
              <mat-chip-list>
              <p>Product: <mat-chip color="primary" selected="true">iPhone X</mat-chip></p>
            </mat-chip-list>`,
})
export class BottomSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<AppComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
