import { TestBed } from '@angular/core/testing';

import { MetaserviceService } from './metaservice.service';

describe('MetaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaserviceService = TestBed.get(MetaserviceService);
    expect(service).toBeTruthy();
  });
});
