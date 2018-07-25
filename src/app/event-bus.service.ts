import { Injectable } from '@angular/core';
import { EventBusArgs } from './models/event-bus-args';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// In this case, the Injectable decorator can be removed because there are no other dependencies injected in this service.
// The decorator preserves metadata, and keeps the types declared.
@Injectable({
  providedIn: 'root' // => treeshakeable providers ~~BlackMagic !!
})
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}
