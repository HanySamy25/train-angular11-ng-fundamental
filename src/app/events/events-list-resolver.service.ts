import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventServeice:EventService) { }


  resolve(){

    return this.eventServeice.getEvents().pipe(map(events=>events))

  }
}
