import { TestBed, inject } from '@angular/core/testing';

import { InitDataStoreService } from './init-data-store.service';

describe('InitDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitDataStoreService]
    });
  });

  it('should be created', inject([InitDataStoreService], (service: InitDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
