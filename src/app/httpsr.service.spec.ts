import { TestBed } from '@angular/core/testing';

import { HttpsrService } from './httpsr.service';

describe('HttpsrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpsrService = TestBed.get(HttpsrService);
    expect(service).toBeTruthy();
  });
});
