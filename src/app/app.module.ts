import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, BottomSheetComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MapTrackComponent } from './map-track/map-track.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatChipsModule} from '@angular/material/chips';

import { AgmCoreModule } from '@agm/core';
import { MapDirectionsDirective } from './map-track/map-directions.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MapTrackComponent,
    MapDirectionsDirective,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatChipsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsRrsHCNv1yTfK1slvO9UGKTQUv-YY-6M'
    })
  ],
  entryComponents: [BottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
