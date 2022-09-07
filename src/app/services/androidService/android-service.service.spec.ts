import { TestBed } from '@angular/core/testing';

import { AndroidServiceService } from './android-service.service';

describe('AndroidServiceService', () => {
  let service: AndroidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndroidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
