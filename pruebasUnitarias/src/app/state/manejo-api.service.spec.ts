import { TestBed } from '@angular/core/testing';

import { ManejoApiService } from './manejo-api.service';

describe('ManejoApiService', () => {
  let service: ManejoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
