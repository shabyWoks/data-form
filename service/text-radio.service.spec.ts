import { TestBed, inject } from '@angular/core/testing';

import { TextRadioService } from './text-radio.service';

describe('TextRadioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextRadioService]
    });
  });

  it('should be created', inject([TextRadioService], (service: TextRadioService) => {
    expect(service).toBeTruthy();
  }));
});
