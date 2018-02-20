import { TestBed, inject } from '@angular/core/testing';

import { TextInputService } from './text-input.service';

describe('TextInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextInputService]
    });
  });

  it('should be created', inject([TextInputService], (service: TextInputService) => {
    expect(service).toBeTruthy();
  }));
});
