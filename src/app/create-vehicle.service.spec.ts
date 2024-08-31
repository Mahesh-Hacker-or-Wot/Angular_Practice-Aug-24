import { TestBed } from '@angular/core/testing';

import { CreateVehicleService } from './create-vehicle.service';

describe('CreateVehicleService', () => {
  let service: CreateVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
