import { TestBed, inject } from '@angular/core/testing';

import { SuggestiesService } from './suggesties.service';

describe('SuggestiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestiesService]
    });
  });

  it('should be created', inject([SuggestiesService], (service: SuggestiesService) => {
    expect(service).toBeTruthy();
  }));
});
