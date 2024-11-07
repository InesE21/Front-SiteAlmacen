import { TestBed } from '@angular/core/testing';

import { Consulta1Service } from './consulta1.service';

describe('Consulta1Service', () => {
  let service: Consulta1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consulta1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
