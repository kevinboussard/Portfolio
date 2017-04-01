import { TestBed, inject } from '@angular/core/testing';

import { ParseJsonCvServiceService } from './parse-json-cv.service';

describe('ParseJsonCvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseJsonCvServiceService]
    });
  });

  it('should ...', inject([ParseJsonCvServiceService], (service: ParseJsonCvServiceService) => {
    expect(service).toBeTruthy();
  }));
});
