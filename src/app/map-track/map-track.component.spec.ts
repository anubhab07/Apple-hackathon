import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTrackComponent } from './map-track.component';

describe('MapTrackComponent', () => {
  let component: MapTrackComponent;
  let fixture: ComponentFixture<MapTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
