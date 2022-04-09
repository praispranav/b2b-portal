import { TestBed } from '@angular/core/testing';

import { ProviderMembershipService } from './provider-membership.service';

describe('ProviderMembershipService', () => {
  let service: ProviderMembershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderMembershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
