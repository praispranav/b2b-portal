import { TestBed } from '@angular/core/testing';

import { ProviderCategoryService } from './provider-category.service';

describe('ProviderCategoryService', () => {
  let service: ProviderCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
