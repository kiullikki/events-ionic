import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home.component";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'page-login',
  templateUrl: 'login.template.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authForm: FormGroup) {

    this.authForm = new FormGroup( controls: {
        login: new FormControl(),
        password: new FormControl()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  onLoadHome() {
    this.navCtrl.push(HomePage);
  }

}
