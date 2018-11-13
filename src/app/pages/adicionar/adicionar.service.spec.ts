import { TestBed } from '@angular/core/testing';

import { AdicionarService } from './adicionar.service';

describe('AdicionarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdicionarService = TestBed.get(AdicionarService);
    expect(service).toBeTruthy();
  });
});
