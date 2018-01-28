import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginStateProvider} from '../../providers/login-state/login-state';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,private globalLoginState:LoginStateProvider) {

  }

}
