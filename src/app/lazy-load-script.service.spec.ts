import { TestBed } from '@angular/core/testing';

import { LazyLoadScriptService } from './lazy-load-script.service';

describe('LazyLoadScriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyLoadScriptService = TestBed.get(LazyLoadScriptService);
    expect(service).toBeTruthy();
  });
});
