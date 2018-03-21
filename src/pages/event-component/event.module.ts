import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {EventPageComponent} from "./event.component";

@NgModule({
  declarations: [
   EventPageComponent
  ],
  imports: [
    IonicPageModule.forChild(EventPageComponent),
  ],
})
export class EventsPageModule{}
