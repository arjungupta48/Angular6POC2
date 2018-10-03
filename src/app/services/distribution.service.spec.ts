import { TestBed } from '@angular/core/testing';

import { DistributionService } from './distribution.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DistributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should create distribution service', () => {
    const service: DistributionService = TestBed.get(DistributionService);
    expect(service).toBeTruthy();
  });
});
