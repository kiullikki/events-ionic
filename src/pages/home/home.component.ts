import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {EventInterface} from "../../app/models/event.model";

import {EventsMock} from "../../app/models/events.mock";
import {HttpService} from "../../app/services/http.servece";

@Component({
  selector: 'page-home',
  templateUrl: 'home.template.html'
})
export class HomePage implements OnInit {

  eventsList: EventInterface[];

  constructor(public navCtrl: NavController, private httpService: HttpService) {

  }

  ngOnInit(){
    this.getEvents();
  }
  getEvents(): void{
    this.httpService.getEventsList().subscribe( (response)=> {
      const events = response.json();
      this.eventsList = events;
    }, (err) => {
      this.eventsList = EventsMock;
      console.log('errrr',err)
    })
  }
}
