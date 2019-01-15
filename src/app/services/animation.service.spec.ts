import { TestBed } from '@angular/core/testing';

import { AnimationService } from './animation.service';

describe('AnimationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimationService = TestBed.get(AnimationService);
    expect(service).toBeTruthy();
  });
});
