import { TestBed, inject } from '@angular/core/testing';

import { FetchLocationService } from './fetch-location.service';

describe('FetchLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchLocationService]
    });
  });

  it('should be created', inject([FetchLocationService], (service: FetchLocationService) => {
    expect(service).toBeTruthy();
  }));
});
