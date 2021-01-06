import { IEvent } from './../shared/event.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {
@Input() event?:IEvent
@Output() eventClick=new EventEmitter()
accessProerty:any="Access Any Property From Template Refrences"
  constructor() { }

  ngOnInit(): void {
  }


  getStartTimeClass(){
    // const isEralyStart = this.event && this.event.time === '8:00 am'
    // return {fontFam:isEralyStart,fontouline:isEralyStart}
    if (this.event && this.event.time === '8:00 am')
      // return "fontFam ,fontouline";
      // return ''
      //or
      return ['fontFam' ,'fontouline'];
      return []

  }

  getStartTimeStyle(){

    if (this.event && this.event.time === '8:00 am')

      return {boreder:'#003300' ,'font-weight':'bold'};
      return {}

  }

  outPutSendFromChiledCompToParentComp(){
    this.eventClick.emit(this.event?.name);
  }

  TemplateRefrenceVariable(){
    console.log('Template Refrence Variable on the chiled component')
  }

}
