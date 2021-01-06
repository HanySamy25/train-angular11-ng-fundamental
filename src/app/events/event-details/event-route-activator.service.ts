import { EventService } from './../../events/shared/event.service';
import { Router,ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventservce:EventService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot){
    const eventExists= !!this.eventservce.getEvent(+route.params['id'])
    if (!eventExists)
      this.router.navigate(['/404'])
      return eventExists;

  }
}
