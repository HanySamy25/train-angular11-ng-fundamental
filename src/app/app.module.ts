import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  EditEventComponent,
  CreateSessionComponent
} from './events/index';

// import { EventsListComponent } from './events/events-list/events-list.component';
// import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumbnail.component';
// import { EventService } from './events/shared/event.service';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { CreateEventComponent } from './events/create-event/create-event.component';
// import { EventsListResolverService } from './events/events-list-resolver.service';

import { NabarComponent } from './nav/nabar/nabar.component';
import { Error404Component } from './errors/error404/error404.component';
import { AuthService } from './user/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NabarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EditEventComponent,
    CreateSessionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    // EventsListResolverService,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
  return window.confirm('You have not saved this event , do you realy want to cancel ?')
  return true
}
