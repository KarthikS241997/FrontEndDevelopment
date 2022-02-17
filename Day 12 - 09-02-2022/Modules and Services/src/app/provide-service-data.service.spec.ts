import { TestBed } from '@angular/core/testing';

import { ProvideServiceDataService } from './provide-service-data.service';

describe('ProvideServiceDataService', () => {
  let service: ProvideServiceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideServiceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
