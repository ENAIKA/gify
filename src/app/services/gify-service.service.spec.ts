import { TestBed } from '@angular/core/testing';

import { GifyServiceService } from './gify-service.service';

describe('GifyServiceService', () => {
  let service: GifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
