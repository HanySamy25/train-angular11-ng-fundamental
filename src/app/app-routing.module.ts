import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { Error404Component } from './errors/error404/error404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventsListResolverService } from './events/events-list-resolver.service';

const routes: Routes = [
  {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
  {path:'events/edit',component:EditEventComponent},
  {path:'events/session/new',component:CreateSessionComponent},
  {path:'events',component:EventsListComponent,
  resolve:{events:EventsListResolverService} },
  {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivatorService]},
  {path:'404',component:Error404Component},
  {path:'',redirectTo:'/events',pathMatch:'full'},
  {  path:'user',loadChildren: () => import('./user/user.module').then(mod=>mod.UserModule)} //Deprecated {path:'user',loadChildren:'./user/user.module#UserModule'}// Deprecated string path start vrom version 8





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
