import { IEvent } from './../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from './../../common/toastr.service';
import { EventService } from './../shared/event.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'events-list',
  // templateUrl: './events-list.component.html',
  template:`<div>
              <h1>Upcoming Angular Events</h1>
                <hr/>
                <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
            <events-thumbnail #thumbnail (click)=toastrThumbnailClick(event.name) (eventClick)="reciveOutPutFromChiledCompToParentComp($event)"

            [event]="event"></events-thumbnail>
              </div>
              </div>
            <!-- <h5>{{thumbnail.accessProerty}}</h5> -->
            <!-- <button (click)="thumbnail.TemplateRefrenceVariable()" class="btn btn-default">Template Refrence Variable</button> -->
            </div>
`,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

events:IEvent[]=[]
  constructor(private eventService:EventService,private toastr:ToastrService,
    private route:ActivatedRoute) {

  }

  ngOnInit(): void {


    //this comes from resolver service
    this.events = this.route.snapshot.data['events']
    // this.eventService.getEvents().subscribe(events=>{
    //   this.events=events
    // })
    // this.events=this.eventService.getEvents()
  }

  toastrThumbnailClick(eventName:any){
    this.toastr.toastrMsgSuccesss(eventName)

  }
  reciveOutPutFromChiledCompToParentComp(data:any){
    console.log('received '+data)
  }

}
