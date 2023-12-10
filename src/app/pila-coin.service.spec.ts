import { TestBed } from '@angular/core/testing';

import { PilaCoinService } from './pila-coin.service';

describe('PilaCoinService', () => {
  let service: PilaCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilaCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
