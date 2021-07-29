import { TestBed } from '@angular/core/testing';

import { AuthSPService } from './auth-sp.service';

describe('AuthSPService', () => {
  let service: AuthSPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
