import { TestBed, inject } from '@angular/core/testing';

import { TextCheckService } from './text-check.service';

describe('TextCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextCheckService]
    });
  });

  it('should be created', inject([TextCheckService], (service: TextCheckService) => {
    expect(service).toBeTruthy();
  }));
});
