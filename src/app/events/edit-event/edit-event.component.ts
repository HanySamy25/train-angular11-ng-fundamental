import { Router } from '@angular/router';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  editEvent:any
  constructor(private router:Router, private eventSerice:EventService) { }

  ngOnInit(): void {
    this.editEvent={
      id: 2,
      name: 'ng-nl',
      date: new Date('4/15/2037'),
      time: '9:00 am',
      price: 950.00,
      imageUrl: '/assets/images/ng-nl.png',
      onlineUrl:"http:ng-nl.org",
      sessions: [
        {
          id: 1,
          name: "Testing Angular 4 Workshop",
          presenter: "Pascal Precht & Christoph Bergdorf",
          duration: 4,
          level: "Beginner",
          abstract: `In this 6 hour workshop you will learn not only how to test Angular 4,
          you will also learn how to make the most of your team's efforts. Other topics
          will be convincing your manager that testing is a good idea, and using the new
          protractor tool for end to end testing.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Angular 4 and Firebase",
          presenter: "David East",
          duration: 3,
          level: "Intermediate",
          abstract: `In this workshop, David East will show you how to use Angular with the new
          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "Reading the Angular 4 Source",
          presenter: "Patrick Stapleton",
          duration: 2,
          level: "Intermediate",
          abstract: `Angular 4's source code may be over 25 million lines of code, but it's really
          a lot easier to read and understand then you may think. Patrick Stapleton will talk
          about his secretes for keeping up with the changes, and navigating around the code.`,
          voters: ['martinfowler']
        },
        {
          id: 4,
          name: "Hail to the Lukas",
          presenter: "Lukas Ruebbelke",
          duration: 1,
          level: "Beginner",
          abstract: `In this session, Lukas will present the
          secret to being awesome, and how he became the President
          of the United States through his amazing programming skills,
          showing how you too can be success with just attitude.`,
          voters: ['bradgreen']
        },
      ]
    }

  }

  //need to add update event service
  updateEvent(formValues:any){
this.eventSerice.saveEvent(formValues)
this.router.navigate(['/events'])
  }

  cancel(){
    this.router.navigate(['/events'])
  }

}
