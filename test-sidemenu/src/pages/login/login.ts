import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


import {HomePage} from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {ApiLoginProvider} from '../../providers/api-login/api-login';
import {AuthKeyProvider} from '../../providers/auth-key/auth-key';
import {LoginStateProvider} from '../../providers/login-state/login-state';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') email: any;
  private username: string = "yourtanmoyghosh@gmail.com";
  private password: string="a";
  private error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiLoginProvider:ApiLoginProvider, 
    private http:HttpClient,private nav:Nav,
    private loginState:LoginStateProvider, 
    private authKey:AuthKeyProvider) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }
  login()
  {
    console.log({unique_text:this.username,password:this.password});
    this.apiLoginProvider.login({unique_text:this.username,password:this.password}).subscribe(
      (val)=>{
        let response:any = val;
        this.loginState.loginState = true;
       this.authKey.setAuthKey(response.result.AuthToken);
       //console.log(response.result.AuthToken);
        this.navCtrl.setRoot(HomePage);
       
       
      },(err)=>{
        console.log(err);
        if(err.status==401)
        {
          this.error="Invalid credentail.";
        }else{
          this.error="Can't able to login now, please try again";
        }
        
      });
  }

}
