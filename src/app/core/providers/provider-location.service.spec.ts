import { TestBed } from '@angular/core/testing';

import { ProviderLocationService } from './provider-location.service';

describe('ProviderLocationService', () => {
  let service: ProviderLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
