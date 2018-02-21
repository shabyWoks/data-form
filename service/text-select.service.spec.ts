import { TestBed, inject } from '@angular/core/testing';

import { TextSelectService } from './text-select.service';

describe('TextSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextSelectService]
    });
  });

  it('should be created', inject([TextSelectService], (service: TextSelectService) => {
    expect(service).toBeTruthy();
  }));
});
