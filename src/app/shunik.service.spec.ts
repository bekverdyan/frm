import { TestBed } from '@angular/core/testing';

import { ShunikService } from './shunik.service';
import { Shunik } from './in-memory-data.service';

describe('ShunikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShunikService = TestBed.get(ShunikService);
    expect(service).toBeTruthy();
  });

  it('shopuld return shuniks', () => {
    const service: ShunikService = TestBed.get(ShunikService);
    service.getShunikner().subscribe((shunikner: Shunik[]) => {
      expect(shunikner.length).toBeGreaterThan(6);
    });
  });

});
