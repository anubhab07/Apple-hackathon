import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MapTrackComponent } from './map-track/map-track.component';
import { HttpClientModule } from '@angular/common/http';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MapTrackComponent
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsRrsHCNv1yTfK1slvO9UGKTQUv-YY-6M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
