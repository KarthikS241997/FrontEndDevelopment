import { TestBed } from '@angular/core/testing';

import { ServiceProvideService } from './service-provide.service';

describe('ServiceProvideService', () => {
  let service: ServiceProvideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProvideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
