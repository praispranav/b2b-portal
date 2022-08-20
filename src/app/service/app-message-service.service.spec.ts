import { TestBed } from '@angular/core/testing';

import { AppMessageServiceService } from './app-message-service.service';

describe('AppMessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMessageServiceService = TestBed.get(AppMessageServiceService);
    expect(service).toBeTruthy();
  });
});
