import { TestBed, inject } from '@angular/core/testing';

import { MyPageService } from './my-page.service';

describe('GameDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPageService]
    });
  });

  it('should be created', inject([MyPageService], (service: MyPageService) => {
    expect(service).toBeTruthy();
  }));
});