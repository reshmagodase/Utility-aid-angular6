import { TestBed } from '@angular/core/testing';

import { ServiceCallsService } from './service-calls.service';

describe('ServiceCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCallsService = TestBed.get(ServiceCallsService);
    expect(service).toBeTruthy();
  });
});
