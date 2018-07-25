import { TestBed, inject } from '@angular/core/testing';

import { EventBusService } from './event-bus.service';

describe('EventBusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusService]
    });
  });

  xit('should be created', inject([EventBusService], (service: EventBusService) => {
    expect(service).toBeTruthy();
  }));
});
